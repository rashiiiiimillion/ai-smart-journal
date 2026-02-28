import mongoose, { Schema, models, model } from "mongoose";

const MonthlyReportSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    month: {
      type: Number,
      required: true,
    },

    year: {
      type: Number,
      required: true,
    },

    summary: {
      type: String,
    },

    generatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const MonthlyReport =
  models.MonthlyReport || model("MonthlyReport", MonthlyReportSchema);

export default MonthlyReport;