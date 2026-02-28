import mongoose, { Schema, models, model } from "mongoose";

const JournalSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    date: {
      type: Date,
      default: Date.now,
    },

    content: {
      type: String,
      required: true,
    },

    emotion: {
      type: String,
    },

    productivityScore: {
      type: Number,
    },

    stressLevel: {
      type: Number,
    },

    summary: {
      type: String,
    },

    advice: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Journal = models.Journal || model("Journal", JournalSchema);

export default Journal;