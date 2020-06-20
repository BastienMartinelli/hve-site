import React from "react";
import Head from "next/head";
import Link from "next/link";
import { getAllSlugs } from "../../src/utils/markdownUtils";
import Layout from "../../src/components/Layout";

function Blog({ slugs }) {
  return (
    <Layout>
      <Head>
        <title>blog</title>
      </Head>
      <h1>Blog</h1>
      <ul>
        {slugs.map((slug) => (
          <li key={slugs}>
            <Link href={`blog/${slug}`}>
              <a>{slug}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  const slugs = getAllSlugs("posts");

  return {
    props: {
      slugs,
    },
  };
}

export default Blog;
