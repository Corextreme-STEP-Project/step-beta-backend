export const permissions = [
    {
        role: 'user',
        actions: [
            'get_project',
            'get_project_id',
            'count_project',
            'get_user_profile',
            'create_submission',
            'update_submission',
            'update_profile',
            'delete_profile',
        ]
    },
    {
        role: 'vendor',
        actions: [
            'get_project',
            'get_project_id',
            'post_project',
            'update_project',
            'delete_project',
            'count_project',
            'delete_submission'
        ]
    },
    {
        role:'Project Owner',
        actions:[
            'create_project',
            'update_project',
            'delete_project',
            'get_project',
            'update_profile',
            'delete_profile',
            'add_ticket',
            'delete_ticket',
            'get_ticket',
            'get_ticket_by_id',
            'create_document',
            'update_document',
            'delete_document',
            'get_document',
            'get_document_by_id',

        ]
    },
    {
        role:'Project Regulator',
        actions:[
            'create_project',
            'update_project',
            'delete_project',
            'get_project',
            'update_project_status',
            'delete_tender',
            'create_tender',
            'update_profile',
            'delete_profile',
            'update_tender',
            'create_compliance',
            'update_compliance',
            'delete_compliance',
            'get_ticket',
            'update_ticket',
            'get_ticket_by_id',
            'create_document',
            'update_document',
            'delete_document',
            'get_document',
            'get_document_by_id',
        ]
    }
]