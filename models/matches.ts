import mongoose, { Document, Schema } from "mongoose";

// Define the schema for a match document
interface IMatch extends Document {
  level: string;
  date: string; // ISO date format (e.g., 2024-11-29T15:00:00)
  team1: string;
  team2: string;
  score1: number;
  score2: number;
  status: "Live" | "Completed"; // You can also add "Scheduled" if necessary
}

const MatchSchema: Schema = new Schema(
  {
    level: { type: String, required: true },
    date: { type: String, required: true },
    team1: { type: String, required: true },
    team2: { type: String, required: true },
    score1: { type: Number, required: true },
    score2: { type: Number, required: true },
    status: {
      type: String,
      enum: ["Live", "Completed", "Soon"],
      required: true,
    },
  },
  {
    timestamps: true, // This will automatically add createdAt and updatedAt fields
  }
);

const Match =
  mongoose.models.Match || mongoose.model<IMatch>("Match", MatchSchema);

export default Match;
