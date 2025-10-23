"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function UserPage() {
  // const [users, setUsers] = useState([]);
  //
  // console.log("Users", users);
  //
  // useEffect(() => {
  //   async function fetchUsers() {
  //     const data = await fetch("https://dummyjson.com/users");
  //     setUsers(await data.json());
  //   }
  //   fetchUsers();
  // }, []);

  const {data: users, error, isLoading } = useSWR("https://dummyjson.com/users", fetcher);

  if (error) return <div>Failed to load users</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Users Fetched: </h1>
      {users &&
        users.users &&
        users.users.map((user) => (
          <Link href={`/users/${user.id}`} key={user.id}>
            <div>{user.firstName}</div>
          </Link>
        ))}
    </div>
  );
}
