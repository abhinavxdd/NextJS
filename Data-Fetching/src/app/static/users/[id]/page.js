async function getUserID(id) {
  const res = await fetch(`https://dummyjson.com/users/${id}`);
  return res.json();
}

// Remove this function if you want SSR and also disable caching in fetch function.
export async function generateStaticParams() {
  const res = await fetch("https://dummyjson.com/users");
  const data = await res.json();

  return data.users.map((user) => ({
    id: String(user.id),
  }));
}

export default async function UserPage({ params }) {
  const resolvedParams = await params; // params is a promise
  const user = await getUserID(resolvedParams.id);

  return (
    <div>
      <h1>
        {user.firstName} {user.lastName}
      </h1>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}