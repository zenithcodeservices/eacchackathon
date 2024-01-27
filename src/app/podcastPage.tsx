import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Welcome to My Podcast App</h1>
      <Link href="/podcast">
        <a>Go to Podcasts</a>
      </Link>
    </div>
  );
};

export default Home;