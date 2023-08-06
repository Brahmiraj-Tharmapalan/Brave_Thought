"use client";
import Feed from "@components/Feed";
import { useSession } from "next-auth/react";
import Image from "next/image";

const Home = ({}) => {
  const { data: session } = useSession();

  return (
    <>
      {session?.user ? (
        <section className="w-full flex-center flex-col">
          <Image
            src="/assets/images/brave.svg"
            width={200}
            height={200}
            alt="loader"
          />
          <Feed />
        </section>
      ) : (
        <section className="w-full flex-center flex-col">
          <h1 className="head_text text-center">
            <div>
              <Image
                src="/assets/images/brave.svg"
                width={500}
                height={500}
                alt="loader"
              />
            </div>
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center">
              Discover & Share
            </span>
          </h1>
          <p className="desc text-center">
            Brave_Thought is an open-source platform empowering the modern world
            to explore, innovate, and collaboratively share creative ideas.
          </p>
        </section>
      )}
    </>
  );
};

export default Home;
