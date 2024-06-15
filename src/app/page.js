"use client"

import { useState } from "react";
import Search from "./components/Search";
import Preview from "./components/preview/Preview";

export default function Home() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  console.log(data);
  return (
    <div className="flex flex-col gap-5 h-full min-h-screen w-full items-center justify-center bg-dark-bg relative">
      <Search setIsLoading={setIsLoading} setData={setData} />
      <Preview data={data} isLoading={isLoading} />
    </div>
  );
}
