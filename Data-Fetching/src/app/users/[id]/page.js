"use client";

import { useState, useEffect, use } from "react";
import { useRouter, useParams } from "next/navigation";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function DisplayUserInfo() {
  const router = useRouter();
  const params = useParams();

  //   const [UserInfo, setUserInfo] = useState([]);

  //   console.log(UserInfo);

  //   useEffect(() => {
  //     const id = params.id;
  //     async function getUserById(id) {
  //       const data = await fetch(`https://dummyjson.com/users/${id}`);
  //       setUserInfo(await data.json());
  //     }
  //     getUserById(id);
  //   }, [params.id]);

  const id = params.id;
  const {
    data: UserInfo,
    error,
    isLoading,
  } = useSWR(id ? `https://dummyjson.com/users/${id}` : null, fetcher);

  if (error) return <div>Failed to load users</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>User Info</h1>
      <h1>
        {UserInfo?.firstName}, {UserInfo?.age}
      </h1>
      <h1>{UserInfo?.email}</h1>
    </div>
  );
}