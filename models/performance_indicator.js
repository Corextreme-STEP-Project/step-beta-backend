
import mongoose, { model, Types } from 'mongoose';

const performanceIndicatorSchema = new mongoose.Schema({
  description: { type: String, required: true },
  targetValue: { type: Number, required: true },
  actualValue: { type: Number, required: true },
  milestoneId: { type: mongoose.Schema.Types.ObjectId, ref: 'milestone' },
  achieved: { type: Boolean, default: false },
  userID:{type: Types.ObjectId, ref:"user"}
});

export const PerformanceIndicatorModel = model('PerformanceIndicator', performanceIndicatorSchema)
