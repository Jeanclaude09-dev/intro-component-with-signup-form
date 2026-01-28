import { useState } from "react";
import "./App.css";
import Form from "./components/form";

function App() {
  return (
    <main className="min-h-screen bg-red-400 grid  gap-10 place-items-center font-poppins ">
      <section className="max-w-300 grid grid-cols-2 gap-10 place-items-center font-poppins">
        <section className="text-white flex flex-col gap-6">
          <h1 className="text-white text-5xl font-bold">
            Learn to code by watching others
          </h1>
          <p className="text-base">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </section>
        <section className="w-full flex flex-col gap-4">
          <button className="bg-purple-700 text-white text-center  p-4 rounded-2xl text-lg cursor-pointer shadow-[0px_6px_2px_rgba(0,0,0,0.15)]">
            <span className="font-bold">Try it free 7 days</span> then $20/mo.
            thereafter
          </button>
          <Form />
        </section>
      </section>
    </main>
  );
}

export default App;
