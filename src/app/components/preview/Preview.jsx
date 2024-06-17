"use client";

import { useState } from "react";
import Image from "next/image";
import DetailData from "./DetailData";
import Link from "next/link";

export default function Preview({ data, status, isLoading }) {
  const [handleListCard, setHandleListCard] = useState(false);
  const [count, setCount] = useState(0);
  console.log(data ? data : "No Data");

  const openReposList = () => {
    // window.open(data.repos_url, "_blank");
    setHandleListCard(true);
    setCount(1);
  };
  const openFollowingList = () => {
    setHandleListCard(true);
    setCount(2);
  };
  const openFollowersList = () => {
    setHandleListCard(true);
    setCount(3);
  };

  return (
    <>
      {data && (
        <div className="bg-dark-grey p-7 gap-10 flex flex-col text-white justify-center rounded-md flex-wrap m-1">
          {status !== 200 ? (
            <span className="text-center">
              User Not Found, Try again or Invalid Username!
            </span>
          ) : isLoading ? (
            <div className="rounded-full h-5 w-5 border border-dark-blue border-t-transparent animate-spin"></div>
          ) : (
            <>
              <div className="flex flex-col gap-5">
                <div className="flex flex-row gap-10 items-center">
                  <div>
                    {data.avatar_url ? (
                      <Image
                        src={data.avatar_url}
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
                  <div>
                    <h1>{data.name}</h1>
                    <h3 className="text-dark-blue lowercase underline">
                      <Link
                        href={`https://www.github.com/${data.login}`}
                        target="_blank"
                      >
                        {data.login}
                      </Link>
                    </h3>
                    <p className="text-slate-400">
                      Joined at {data.created_at?.split("T")[0]}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="max-w-xs min-w-full text-slate-200">
                    {data.bio ? data.bio : "Bio Not Found!"}
                  </p>
                </div>
                <div className="flex bg-dark-bg p-4 gap-5 rounded-md justify-evenly items-center flex-wrap">
                  <div className="flex items-center flex-col text-slate-300">
                    <h3>Repos</h3>
                    <span>{data.public_repos}</span>
                  </div>
                  <div className="flex items-center flex-col text-slate-300">
                    <h3>Following</h3>
                    <span>{data.following}</span>
                  </div>
                  <div className="flex items-center flex-col text-slate-300">
                    <h3>Followers</h3>
                    <span>{data.followers}</span>
                  </div>
                </div>
                <div className="flex gap-5 justify-start flex-col flex-wrap">
                  <div className="flex gap-5 justify-start flex-wrap">
                    <div className="flex gap-5 items-center">
                      <span>
                        <svg
                          viewBox="0 0 500 1000"
                          fill="currentColor"
                          height="1em"
                          width="1em"
                        >
                          <path d="M250 100c69.333 0 128.333 24.333 177 73s73 107.667 73 177c0 70.667-20.667 151.667-62 243s-83.333 165.667-126 223l-62 84c-6.667-8-15.667-19.667-27-35-11.333-15.333-31.333-45-60-89s-54-87.333-76-130-42-91.667-60-147S0 394 0 350c0-69.333 24.333-128.333 73-177s107.667-73 177-73m0 388c37.333 0 69.333-13.333 96-40s40-58.667 40-96-13.333-69-40-95-58.667-39-96-39-69 13-95 39-39 57.667-39 95 13 69.333 39 96 57.667 40 95 40" />
                        </svg>
                      </span>
                      <span className="text-slate-300">
                        {data.location ? data.location : "Not Found"}
                      </span>
                    </div>
                    <div className="flex gap-5 items-center">
                      <span>
                        <svg
                          viewBox="0 0 1024 1024"
                          fill="currentColor"
                          height="1em"
                          width="1em"
                        >
                          <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z" />
                        </svg>
                      </span>
                      <Link
                        className="text-slate-300"
                        href={`https://x.com/${
                          data.twitter_username ? data.twitter_username : ""
                        }/`}
                        target="_blank"
                      >
                        {data.twitter_username
                          ? data.twitter_username
                          : "Not Found"}
                      </Link>
                    </div>
                  </div>
                  <div className="flex gap-5 justify-start flex-wrap">
                    <div className="flex gap-5 items-center">
                      <span>
                        <svg
                          viewBox="0 0 1024 1024"
                          fill="currentColor"
                          height="1em"
                          width="1em"
                        >
                          <path d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z" />
                        </svg>
                      </span>
                      <span>
                        {data.blog ? (
                          <Link
                            className="text-slate-300"
                            href={data.blog}
                            target="_blank"
                          >
                            {data.blog}
                          </Link>
                        ) : (
                          "Not Found"
                        )}
                      </span>
                    </div>
                    <div className="flex gap-5 items-center">
                      <span>
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          height="1em"
                          width="1em"
                        >
                          <path d="M18 8l-8 5-8-5V6l8 5 8-5m0-2H2C.9 4 0 4.9 0 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m6 3h-2v6h2V7m0 8h-2v2h2v-2z" />
                        </svg>
                      </span>
                      <Link
                        className="text-slate-300"
                        href={`mailto:${data.email ? data.email : ""}`}
                      >
                        {data.email ? data.email : "Not Found"}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 items-center justify-evenly flex-wrap">
                  <span>
                    {data.public_repos > 0 && (
                      <button
                        className="underline text-slate-300"
                        onClick={openReposList}
                      >
                        repository list
                      </button>
                    )}
                  </span>
                  <span>
                    {data.following > 0 && (
                      <button
                        className="underline text-slate-300"
                        onClick={openFollowingList}
                      >
                        following list
                      </button>
                    )}
                  </span>
                  <span>
                    {data.followers > 0 && (
                      <button
                        className="underline text-slate-300"
                        onClick={openFollowersList}
                      >
                        followers list
                      </button>
                    )}
                  </span>
                </div>
              </div>
              {handleListCard && (
                <div className="flex absolute top-0 left-0 bg-dark-bg min-w-full justify-center items-center min-h-screen p-5">
                  <DetailData
                    setHandleListCard={setHandleListCard}
                    user={data.login}
                    count={count}
                    // setIsLoadingData={setIsLoadingData}
                  />
                </div>
              )}
            </>
          )}
        </div>
      )}
    </>
  );
}
