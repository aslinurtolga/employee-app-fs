import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Ana sayfa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Ana sayfa</h1>
      <Link href="register">Register'a git</Link>
    </div>
  );
};

export default Home;
