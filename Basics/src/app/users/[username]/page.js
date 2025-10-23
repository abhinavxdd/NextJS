"use client"; // 1. Required for using hooks like useEffect and useRouter

import { useEffect } from "react";
// 2. Import hooks from 'next/navigation'
import { useRouter, useParams } from "next/navigation";

const useUser = () => ({ user: { name: "Piyush" }, loading: false });

const Page = () => {
  // 3. Get the router object (for methods like push, replace)
  const router = useRouter();
  
  // 4. Get the URL parameters (like [user])
  const params = useParams();
  
  const user = useUser();

  // 5. Get the dynamic param from the 'params' hook
  const username = params.username; // Assumes your folder is named [username]

  useEffect(() => {if (user.user == null) {router.replace("/");}}, [router, user.user]);

  return (
    <div style={{ padding: '20px' }}>
      {/* 6. Use the 'username' variable from params */}
      <h1>This is index page for {username}</h1>
      <br></br>
      <button
        onClick={(e) =>
          // 7. 'router.push' now takes a simple URL string
          router.push(`/users/${username}/settings`)
        }
        style={{ margin: '10px', padding: '10px 20px', cursor: 'pointer' }}
      >
        Open Settings Page
      </button>

      {/* These methods work the same way! */}
      <button 
        onClick={(e) => router.replace("/")}
        style={{ margin: '10px', padding: '10px 20px', cursor: 'pointer' }}
      >
        Home
      </button>
      <button 
        onClick={(e) => router.refresh()}
        style={{ margin: '10px', padding: '10px 20px', cursor: 'pointer' }}
      >
        Refresh
      </button>
    </div>
  );
};

export default Page;