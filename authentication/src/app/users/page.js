"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function UserPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <h1 className="p-8 text-xl">Loading...</h1>;
  }

  if (status === "authenticated") {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-2">Hi, {session.user.name}!</h1>

        <button
          onClick={signOut}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          Sign Out
        </button>
      </div>
    );
  }

  // Unauthenticated state
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-2">Hi, Guest!</h1>
      <p className="mb-4">You are not signed in.</p>
      <button
        onClick={signIn}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Sign in with GitHub
      </button>
    </div>
  );
}
