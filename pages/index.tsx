import Link from "next/link";
import { observer, inject } from "mobx-react";
import Layout from "../containers/Layout";
import TestButton from "../components/button/TestButton";

const IndexPage = inject("store")(
  observer((props: any) => {
    return (
      <Layout title="Home | Next.js + TypeScript Example">
        <div className="shadow-lg px-6 py-4 bg-gray-200">
          <div className="text-2xl">{props.store.data.title}</div>
          <hr />
          <p>
            Go to &nbsp;
            <Link href="/about">
              <a>About</a>
            </Link>
          </p>
          <TestButton text="Test" />
        </div>
      </Layout>
    );
  })
);

export default IndexPage;
