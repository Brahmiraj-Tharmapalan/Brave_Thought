import { Schema, model, models } from "mongoose";

const ThoughtSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  thought: {
    type: String,
    required: [true, "Thought is required."],
  },
  tag: {
    type: String,
    required: [true, "Tag is required."],
  },
});

const Thought = models.Thought || model("Thought", ThoughtSchema);

export default Thought;
