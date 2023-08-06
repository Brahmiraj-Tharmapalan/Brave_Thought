import Thought from "@models/thought";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const thought = await Thought.findById(params.id).populate("creator");
    if (!thought) return new Response("Thought Not Found", { status: 404 });

    return new Response(JSON.stringify(thought), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  const { thought, tag } = await request.json();

  try {
    await connectToDB();

    // Find the existing thought by ID
    const existingThought = await Thought.findById(params.id);

    if (!existingThought) {
      return new Response("Thought not found", { status: 404 });
    }

    // Update the thought with new data
    existingThought.thought = thought;
    existingThought.tag = tag;

    await existingThought.save();

    return new Response("Successfully updated the Thoughts", { status: 200 });
  } catch (error) {
    return new Response("Error Updating Thought", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();

    // Find the thought by ID and remove it
    await Thought.findByIdAndRemove(params.id);

    return new Response("Thought deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Error deleting thought", { status: 500 });
  }
};
