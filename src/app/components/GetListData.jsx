"use client";

import { useState, useEffect } from "react";

export default function GetListData({ key, username, setIsLoadingData }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoadingData(true);
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setData(data);
      setIsLoadingData(false);
    };

    fetchData();
  }, [username, setIsLoadingData]);

  return (
    <div id={key} className="flex gap-5 rounded-md text-slate-300 flex-wrap justify-center">
      <div className="flex flex-col justify-center items-center">
        <span>Repos</span>
        <span>{data.public_repos}</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <span>Following</span>
        <span>{data.following}</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <span>Followers</span>
        <span>{data.followers}</span>
      </div>
    </div>
  );
}
