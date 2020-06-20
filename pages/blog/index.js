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
      <h>Blog</h>
      <section class="hero">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">Hero title</h1>
            <h2 class="subtitle">Hero subtitle</h2>
          </div>
        </div>
      </section>
      <ul>
        {slugs.map((slug) => (
          <li>
            <Link key={slugs} href={`blog/${slug}`}>
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
