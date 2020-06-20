import React from "react";
import Head from "next/head";
import { getAllSlugs, getMD } from "../../src/utils/markdownUtils";

function Post({ slug, content, data }) {
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
}

export async function getStaticPaths() {
  const slugs = getAllSlugs("posts");
  const paths = slugs.map((slug) => ({
    params: {
      slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const { content, data } = getMD("posts", slug);

  return {
    props: {
      slug,
      content,
      data,
    },
  };
}

export default Post;
