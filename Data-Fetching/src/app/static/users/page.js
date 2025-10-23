export default async function UserPageSSR() {
  const data = await getData();
  console.log(data);
  return (
    <div>
      <h1>Users (SSG) : In the App Router, SSG is the default. To force SSR, you must explicitly tell fetch not to cache its data.</h1>
      <ul>
        {data.users.map((user) => (
          <li key={user.id}>{user.firstName}</li>
        ))}
      </ul>
    </div>
  );
}

async function getData() {
  const res = await fetch("https://dummyjson.com/users"); // SSG
  return res.json();
}