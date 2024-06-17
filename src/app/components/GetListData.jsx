"use client";

import { useState, useEffect } from "react";

export default function GetListData({ key, username }) {
  const [data, setData] = useState([]);
  const [isLoadingData, setIsLoadingData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoadingData(true);
      const response = await fetch(`/api/user/${username}`);
      const data = await response.json();
      setData(data.data);
      setIsLoadingData(false);
    };

    fetchData();
  }, [username, setIsLoadingData]);

  console.log(data);

  return (
    <>
      {isLoadingData ? (
        <div className="rounded-full h-5 w-5 border border-dark-blue border-t-transparent animate-spin"></div>
      ) : (
        <div
          id={key}
          className="flex gap-5 rounded-md text-slate-300 flex-wrap justify-center"
        >
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
      )}
    </>
  );
}
