import mongoose, { model } from 'mongoose';

const milestoneSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  targetDate: { type: Date },
  status: { type: String, enum: ['not started', 'in progress', 'completed'], default: 'not started' },
  performanceIndicators: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PerformanceIndicator'
  }],
});

export const MilestoneModel = model('milestone', milestoneSchema)