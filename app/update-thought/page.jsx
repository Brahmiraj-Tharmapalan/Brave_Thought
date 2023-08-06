"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@components/Form";

const UpdateThought = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const thoughtId = searchParams.get("id");

  const [post, setPost] = useState({ thought: "", tag: "" });
  const [submitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const getThoughtDetails = async () => {
      const response = await fetch(`/api/thought/${thoughtId}`);
      const data = await response.json();

      setPost({
        thought: data.thought,
        tag: data.tag,
      });
    };

    if (thoughtId) getThoughtDetails();
  }, [thoughtId]);

  const updateThought = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!thoughtId) return alert("Missing ThoughtId!");

    try {
      const response = await fetch(`/api/thought/${thoughtId}`, {
        method: "PATCH",
        body: JSON.stringify({
          thought: post.thought,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updateThought}
    />
  );
};

export default UpdateThought;
