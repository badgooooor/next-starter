import Link from "next/link";
import Layout from "../containers/Layout";

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <div className="shadow-lg px-6 py-4 bg-gray-200">
      <div className="text-2xl">About</div>
      <p>This is the about page</p>
      <hr />
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </div>
  </Layout>
);

export default AboutPage;
