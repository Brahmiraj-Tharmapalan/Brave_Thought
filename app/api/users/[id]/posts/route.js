import thought from "@models/thought";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const thoughts = await thought
      .find({ creator: params.id })
      .populate("creator");

    return new Response(JSON.stringify(thoughts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch thoughts created by user", {
      status: 500,
    });
  }
};
