
import mongoose, { model, Types } from 'mongoose';

const milestoneSchema = new mongoose.Schema({
  milestoneName: { type: String, required: true },
  projectName: {type: String, required: true},
  description: { type: String },
  targetDate: { type: Date },
  status: { type: String, enum: ['not started', 'in progress', 'completed'], default: 'not started' },
  performanceIndicators: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PerformanceIndicator'
  }],
  userID:{type:Types.ObjectId, ref:'user'}
});

export const MilestoneModel = model('milestone', milestoneSchema)