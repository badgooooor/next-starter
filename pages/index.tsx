import Link from "next/link";
import Layout from "../components/Layout";

import { observer, inject } from "mobx-react";

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
        </div>
      </Layout>
    );
  })
);

export default IndexPage;
