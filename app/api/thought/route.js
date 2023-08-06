import Thought from "@models/thought";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
  try {
    await connectToDB();

    const thoughts = await Thought.find({}).populate("creator");

    return new Response(JSON.stringify(thoughts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all thoughts", { status: 500 });
  }
};
