import Link from "next/link";

export const runtime = "edge";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const getRandomname = () => {
  return fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((data) => data.results[0].name.first);
};

const getName = async () => {
  return getRandomname();
};

const Home = async () => {
  const name = await getName();

  return (
    <div>
      <h1>worker-next-app</h1>
      <p>Hello World! This is the Home page</p>
      <p>Random name: {name}</p>
      <p>
        Visit the <Link href="/about">About</Link> page.
      </p>
    </div>
  );
};

export default Home;
