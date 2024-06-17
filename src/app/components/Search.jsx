import { useState, useEffect, useCallback } from "react";

export default function Search({ setIsLoading, setData }) {
  const [user, setUser] = useState("bholu-singh");

  const handleSearch = useCallback(async () => {
    setIsLoading(true);
    const response = await fetch(`/api/user/${user}`);
    const data = await response.json();
    setData(data);
    setIsLoading(false);
  }, [user, setIsLoading, setData]);

  // useEffect(async () => {
  //   setData({
  //     data: {
  //       login: "BHOLU-SINGH",
  //       id: 60701111,
  //       node_id: "MDQ6VXNlcjYwNzAxMTEx",
  //       avatar_url: "https://avatars.githubusercontent.com/u/60701111?v=4",
  //       gravatar_id: "",
  //       url: "https://api.github.com/users/BHOLU-SINGH",
  //       html_url: "https://github.com/BHOLU-SINGH",
  //       followers_url: "https://api.github.com/users/BHOLU-SINGH/followers",
  //       following_url:
  //         "https://api.github.com/users/BHOLU-SINGH/following{/other_user}",
  //       gists_url: "https://api.github.com/users/BHOLU-SINGH/gists{/gist_id}",
  //       starred_url:
  //         "https://api.github.com/users/BHOLU-SINGH/starred{/owner}{/repo}",
  //       subscriptions_url:
  //         "https://api.github.com/users/BHOLU-SINGH/subscriptions",
  //       organizations_url: "https://api.github.com/users/BHOLU-SINGH/orgs",
  //       repos_url: "https://api.github.com/users/BHOLU-SINGH/repos",
  //       events_url: "https://api.github.com/users/BHOLU-SINGH/events{/privacy}",
  //       received_events_url:
  //         "https://api.github.com/users/BHOLU-SINGH/received_events",
  //       type: "User",
  //       site_admin: false,
  //       name: "Bholu Singh",
  //       company: "owner of freeprojects1 blog",
  //       blog: "https://freeprojects1.blogspot.com/",
  //       location: "Bikaner Rajasthan India",
  //       email: null,
  //       hireable: true,
  //       bio: "I'm Bholu Singh and I'm a seasoned web developer and designer with a passion for crafting captivating and user-centric web solutions.",
  //       twitter_username: "bholu7972",
  //       public_repos: 102,
  //       public_gists: 0,
  //       followers: 7,
  //       following: 2,
  //       created_at: "2020-02-05T13:57:03Z",
  //       updated_at: "2024-06-14T11:56:04Z",
  //     },
  //     status: 200,
  //     success: "true",
  //   });
  // }, [setData]);

  return (
    <div className="flex bg-dark-grey p-3 gap-3 rounded-md shadow-lg flex-wrap justify-center m-1">
      <div className="flex items-center gap-3">
        <span>
          <svg
            className="text-dark-blue"
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="2em"
            width="2em"
          >
            <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
          </svg>
        </span>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Search"
          name="search"
          className="bg-transparent outline-none text-white pt-1 pb-1"
        />
      </div>
      <div>
        <button
          onClick={handleSearch}
          className="bg-dark-blue text-white px-3 py-2 rounded-lg shadow-md"
        >
          Search
        </button>
      </div>
    </div>
  );
}
