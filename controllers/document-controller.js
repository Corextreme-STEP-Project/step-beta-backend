import { DocumentMetadataModel } from "../models/document-model.js";
import { createDocumentMetadataValidator, UpdateDocumentMetadataValidator } from "../validators/document-validator.js";

export const createDocument = async (req, res, next) => {
    try {
        const { error, value } = createDocumentMetadataValidator.validate(req.body)
        if (error) {
            return res.status(422).json(error)
        }
        const existingDoc = await DocumentMetadataModel.findOne({ documentId: value.documentId })
        if (existingDoc) {
            return res.status(409).json(`Document with ID ${value.documentId} already exists`)
        }
        const document = await DocumentMetadataModel.create(value)
        res.status(201).json(document)
    } catch (error) {
        next(error)
    }
}

// Get document by id
export const getDocument = async (req, res, next) => {
    try {
        const {id} = req.params
        const document = await DocumentMetadataModel.findById(id).populate('relatedDocuments')
        if (!document) {
            return res.status(404).json({ message: 'Document not found' })
        }
        res.status(200).json(document)
    } catch (error) {
        next(error)
    }
}

export const getAllDocuments = async (req, res, next) => {
    try {
        const {
            searchQuery,
            documentType,
            status,
            department,
            sortBy ="creatdDate",
            sortOrder = "desc",
            page = 1,
            limit = 10
        } = req.query

        const query = {}

        if (searchQuery) {
            query.$text = { $search: searchQuery }
        }
        if (documentType) query.documentType = documentType
        if (status) query.status = status
        if (department) query.department = department

        // Calculate skip value for pagination
        const skip = (page - 1) * limit

        // Build the sort object
        const sort = {[sortBy]:sortOrder=== 'asc' ? 1 : -1}


        const [documents, total] = await Promise.all([
            DocumentMetadataModel.find(query)
                .sort(sort)
                .skip(skip)
                .limit(parseInt(limit))
                .populate('relatedDocuments'),
            DocumentMetadataModel.countDocuments(query)
        ])
        res.status(200).json({
            documents,
            pagination: {
                total,
                page: parseInt(page),
                pages: Math.ceil(total / limit),
                limit: parseInt(limit)
            }
        })
    } catch (error) {
        next(error)
    }
}


export const updateDocument = async (req, res, next) => {
   try {
     const {id}= req.params
     const {error,value}= UpdateDocumentMetadataValidator.validate(req.body)
     if (error) {
        return res.status(400).json(error)
     }
     const document = await DocumentMetadataModel.findByIdAndUpdate(id,value,{new:true})

     if (!document) {
        return res.status(404).json("Document not found")
     }
     res.status(201).json("Document updated successfully")
 
   } catch (error) {
    next(error)
   }
}

export const deleteDocument = async (req, res, next) => {
    try {
        const  documemtId  = req.params.id

        const document = await DocumentMetadataModel.findByIdAndDelete(documemtId)

        if (!document) {
            return res.status(404).json({ message: 'Document not found' })
        }
        res.status(200).json({ message: 'Document deleted successfully' })
    } catch (error) {
        next(error)
    }
}