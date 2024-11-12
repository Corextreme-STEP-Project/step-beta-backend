import mongoose, { model } from 'mongoose';

const performanceIndicatorSchema = new mongoose.Schema({
  description: { type: String, required: true },
  targetValue: { type: Number, required: true },
  actualValue: { type: Number, required: true },
  milestoneId: { type: mongoose.Schema.Types.ObjectId, ref: 'milestone' },
  achieved: { type: Boolean, default: false }
});

export const PerformanceIndicatorModel = model('PerformanceIndicator', performanceIndicatorSchema)
