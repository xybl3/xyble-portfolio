"use client";
import React, { useEffect } from "react";
import { Button } from "@nextui-org/react";
import AppBar from "@/components/AppBar";
import usei18n from "@/hooks/usei18n";

export default function Home() {
  const { getMessage } = usei18n();
  // useEffect(() => {
  //   console.log("messages,", messages);
  // }, [messages]);
  return (
    <>
      <AppBar />
      <main className="flex flex-col min-w-screen min-h-screen">
        <section
          id="#"
          className="px-10 min-h-screen w-full flex flex-col-reverse md:flex-row items-start md:items-center"
        >
          <div>
            <p className="text-4xl md:text-5xl">
              {getMessage("home.header.title")}
            </p>
            <p className="text-gray-400 w-full md:w-1/2 text-justify">
              {getMessage("home.header.description")}
            </p>
            <div className="flex flex-row gap-3 my-5">
              <Button color="primary">
                {getMessage("home.button.contact")}
              </Button>
            </div>
          </div>
          <img
            src="https://avatars.githubusercontent.com/u/68923434?v=4"
            className="rounded-full "
          />
        </section>
        <section id="about" className="min-h-screen px-10 pt-3">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
            magnam distinctio animi repudiandae pariatur sequi ducimus
            necessitatibus mollitia laboriosam maxime qui, quis nam minima
            sapiente temporibus. Non fuga cupiditate iure?
          </p>
        </section>
      </main>
    </>
  );
}
