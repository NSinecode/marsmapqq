"use client";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();
  const [url, setUrl] = useState("");

  return (
    <div className="flex flex-col gap-5 mx-auto w-full items-center mt-10">
      <div className="flex flex-col bg-red-800 p-6 w-[400px] rounded-lg shadow-lg items-center px-4 shadow-red-950 ">
        <h1 className="font-mono text-2xl">Mars map</h1>
          <div className="flex flex-col gap-2 items-center w-full">
              <input
                value={url}
                onChange={(event) => setUrl(event.target.value)}
                className="bg-gray-300 rounded w-full text-black p-1 mt-3"
                placeholder="Enter the stream URL"
              />
              <button
                className="bg-white p-2 rounded-xl cursor-pointer text-black mt-2 px-3"
                disabled={!url}
                onClick={() => router.push(`/map?url=${url}`)}
              >
                Render map
              </button>
          </div>
      </div>
    </div>
  );
}
