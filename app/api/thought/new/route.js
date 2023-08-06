import Thought from "@models/thought";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
  const { userId, thought, tag } = await request.json();

  try {
    await connectToDB();
    const newThought = new Thought({ creator: userId, thought, tag });

    await newThought.save();
    return new Response(JSON.stringify(newThought), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new thought", { status: 500 });
  }
};
