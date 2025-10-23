export default async function UserPageSSR() {
  const data = await getData();
  console.log(data);
  return (
    <div>
      <h1>Users (SSR)</h1>
      <ul>
        {data.users.map((user) => (
          <li key={user.id}>{user.firstName}</li>
        ))}
      </ul>
    </div>
  );
}

async function getData() {
  const res = await fetch("https://dummyjson.com/users", {cache: 'no-store'}); // Forcing SSR
  return res.json();
}