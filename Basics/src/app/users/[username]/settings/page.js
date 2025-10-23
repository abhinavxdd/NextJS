"use client";

import { useParams } from "next/navigation";

const Page = () => {
  const router = useParams();
  console.log(router);

  return (
    <div>
      <h1>This is setting page for <strong>{router.username}</strong></h1>
    </div>
  );
};

export default Page;