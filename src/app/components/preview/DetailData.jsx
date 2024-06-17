"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import GetListData from "../GetListData";

export default function DetailData({
  setHandleListCard,
  user,
  count,
  // setIsLoadingData,
}) {
  const [data, setData] = useState([]);
  const [isLoadingData, setIsLoadingData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      // Initial API call
      setHandleListCard(true);
      setIsLoadingData(true);
      let response;
      count == 1
        ? (response = await fetch(`/api/user/${user}/repos`))
        : count == 2
        ? (response = await fetch(`/api/user/${user}/following`))
        : count == 3
        ? (response = await fetch(`/api/user/${user}/followers`))
        : null;
      const initialData = await response.json();
      setData(initialData.data);
      setIsLoadingData(false);
    };

    fetchData();
  }, [setHandleListCard, setIsLoadingData, count, user]);

  const closeListCard = () => {
    setHandleListCard(false);
  };

  return (
    <div className="flex flex-wrap justify-center items-center gap-5">
      {isLoadingData ? (
        <div className="rounded-full h-5 w-5 border border-dark-blue border-t-transparent animate-spin"></div>
      ) : (
        <>
          <button onClick={closeListCard}>
            <svg
              className="fixed top-0 right-0 m-3 cursor-pointer rounded-md"
              viewBox="0 0 21 21"
              fill="currentColor"
              height="3em"
              width="3em"
            >
              <g
                fill="none"
                fillRule="evenodd"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15.5 15.5l-10-10zM15.5 5.5l-10 10" />
              </g>
            </svg>
          </button>
          {data.length > 0 &&
          data.length !== undefined &&
          data.length !== null &&
          data.length !== "" &&
          count !== 1 ? (
            Object.values(data)
              .slice(0, data.length)
              .map((item) => (
                <div
                  key={item.id}
                  className="flex gap-5 p-5 m-2 rounded-md bg-dark-grey justify-center items-center flex-wrap min-[474px]:text-left text-center"
                >
                  <div className="flex gap-5 flex-col justify-center items-center">
                    {item.avatar_url ? (
                      <Image
                        src={item.avatar_url}
                        alt="User Profile picture"
                        width={100}
                        height={100}
                        className="w-28 rounded-full"
                      />
                    ) : (
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        height="5em"
                        width="5em"
                      >
                        <path d="M12 2A10.13 10.13 0 002 12a10 10 0 004 7.92V20h.1a9.7 9.7 0 0011.8 0h.1v-.08A10 10 0 0022 12 10.13 10.13 0 0012 2zM8.07 18.93A3 3 0 0111 16.57h2a3 3 0 012.93 2.36 7.75 7.75 0 01-7.86 0zm9.54-1.29A5 5 0 0013 14.57h-2a5 5 0 00-4.61 3.07A8 8 0 014 12a8.1 8.1 0 018-8 8.1 8.1 0 018 8 8 8 0 01-2.39 5.64z" />
                        <path d="M12 6a3.91 3.91 0 00-4 4 3.91 3.91 0 004 4 3.91 3.91 0 004-4 3.91 3.91 0 00-4-4zm0 6a1.91 1.91 0 01-2-2 1.91 1.91 0 012-2 1.91 1.91 0 012 2 1.91 1.91 0 01-2 2z" />
                      </svg>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <h1 className="pb-3 text-lg">
                      <Link
                        className="text-dark-blue lowercase"
                        href={`https://www.github.com/${
                          item.login ? item.login : ""
                        }`}
                        target="_blank"
                      >
                        {item.login ? item.login : "Not Found"}
                      </Link>
                    </h1>
                    {
                      <GetListData
                        key={item.id}
                        username={item.login}
                        setIsLoadingData={setIsLoadingData}
                      />
                    }
                  </div>
                </div>
              ))
          ) : count == 1 ? (
            <div className="flex flex-wrap justify-start md:justify-center gap-5">
              {Object.values(data).map((item, index) => (
                <Link href={item.html_url} target="_blank">
                  <div
                    key={item.id}
                    className="border-b max-w-md p-5 rounded-md border-slate-500 hover:border-slate-100 delay-100 md:w-full hover:bg-dark-grey hover:text-slate-50 cursor-pointer"
                  >
                    <h4>
                      Repos count: <span className="text-md">{index + 1}</span>
                    </h4>
                    <p className="truncate text-slate-300">
                      {item.name ? "Repos name: " + item.name : ""}
                    </p>
                    <p className="truncate text-slate-300">
                      {item.description
                        ? "Description: " + item.description
                        : ""}
                    </p>
                    <p className="truncate text-slate-300">
                      {item.html_url ? "Repos link: " + item.html_url : ""}
                    </p>
                    <p className="text-slate-300">
                      {item.created_at?.split("T")[0]
                        ? "Created: " + item.created_at?.split("T")[0]
                        : ""}
                    </p>
                    <p className="text-slate-300">
                      {item.updated_at?.split("T")[0]
                        ? "Last Updated: " + item.updated_at?.split("T")[0]
                        : ""}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            "No Data Found!"
          )}
        </>
      )}
      {/* <button onClick={closeListCard}>
        <svg
          className="fixed top-0 right-0 m-3 cursor-pointer rounded-md"
          viewBox="0 0 21 21"
          fill="currentColor"
          height="3em"
          width="3em"
        >
          <g
            fill="none"
            fillRule="evenodd"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15.5 15.5l-10-10zM15.5 5.5l-10 10" />
          </g>
        </svg>
      </button>
      {data.length > 0 &&
      data.length !== undefined &&
      data.length !== null &&
      data.length !== "" &&
      count !== 1 ? (
        Object.values(data)
          .slice(0, data.length)
          .map((item) => (
            <div key={item.id} className="flex gap-5 p-5 m-2 rounded-md bg-dark-grey justify-center items-center flex-wrap min-[474px]:text-left text-center">
              <div className="flex gap-5 flex-col justify-center items-center">
                {item.avatar_url ? (
                  <Image
                    src={item.avatar_url}
                    alt="User Profile picture"
                    width={100}
                    height={100}
                    className="w-28 rounded-full"
                  />
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="5em"
                    width="5em"
                  >
                    <path d="M12 2A10.13 10.13 0 002 12a10 10 0 004 7.92V20h.1a9.7 9.7 0 0011.8 0h.1v-.08A10 10 0 0022 12 10.13 10.13 0 0012 2zM8.07 18.93A3 3 0 0111 16.57h2a3 3 0 012.93 2.36 7.75 7.75 0 01-7.86 0zm9.54-1.29A5 5 0 0013 14.57h-2a5 5 0 00-4.61 3.07A8 8 0 014 12a8.1 8.1 0 018-8 8.1 8.1 0 018 8 8 8 0 01-2.39 5.64z" />
                    <path d="M12 6a3.91 3.91 0 00-4 4 3.91 3.91 0 004 4 3.91 3.91 0 004-4 3.91 3.91 0 00-4-4zm0 6a1.91 1.91 0 01-2-2 1.91 1.91 0 012-2 1.91 1.91 0 012 2 1.91 1.91 0 01-2 2z" />
                  </svg>
                )}
              </div>
              <div className="flex flex-col">
                <h1 className="pb-3 text-lg">
                  <Link
                  className="text-dark-blue lowercase"
                    href={`https://www.github.com/${
                      item.login ? item.login : ""
                    }`}
                    target="_blank"
                  >
                    {item.login ? item.login : "Not Found"}
                  </Link>
                </h1>
                {
                  <GetListData
                  key={item.id}
                    username={item.login}
                    setIsLoadingData={setIsLoadingData}
                  />
                }
              </div>
            </div>
          ))
      ) : count == 1 ? (
        <div className="flex flex-wrap justify-start md:justify-center gap-5">
          {Object.values(data).map((item, index) => (
            <div key={item.id} className="border-b max-w-md p-5 rounded-md border-slate-500 hover:border-slate-100 delay-100 md:w-full hover:bg-dark-grey hover:text-slate-50">
              <h4>
                Repos count: <span className="text-md">{index + 1}</span>
              </h4>
              <p className="truncate text-slate-300">
                {item.name ? "Repos name: " + item.name : ""}
              </p>
              <p className="truncate text-slate-300">
                {item.description ? "Description: " + item.description : ""}
              </p>
              <p className="truncate text-slate-300">
                {item.html_url ? "Repos link: " + item.html_url : ""}
              </p>
              <p className="text-slate-300">
                {item.created_at?.split("T")[0]
                  ? "Created: " + item.created_at?.split("T")[0]
                  : ""}
              </p>
              <p className="text-slate-300">
                {item.updated_at?.split("T")[0]
                  ? "Last Updated: " + item.updated_at?.split("T")[0]
                  : ""}
              </p>
            </div>
          ))}
        </div>
      ) : (
        !setIsLoadingData ? "No Data Found!" : ""
      )} */}
    </div>
  );
}
