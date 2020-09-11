import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <div className="shadow-lg px-6 py-4 bg-gray-200">
      <div className="text-2xl">Next.js is up and running 👋</div>
      <hr />
      <p>
        Go to &nbsp;
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </div>
  </Layout>
);

export default IndexPage;
