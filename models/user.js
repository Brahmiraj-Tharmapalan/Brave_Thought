import { Schema, models, model } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: [true, "Email already exists"],
      required: [true, "Email is required"],
    },
    username: {
      type: String,
      required: [true, "Username is required"],
      match: [
        /^(?=.{5,20}$)(?![.])(?!.[.]{2})(?<![.])(?!.(?:russia|росія|россия))(?<![.])$/,
        "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
      ],
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = models.User || model("User", userSchema);

export default User;
