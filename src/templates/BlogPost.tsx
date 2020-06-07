import React from "react";
import { Post } from "../libs/post";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXComponents } from "../components/atoms/mdx-components";
import { Layout } from "../components/layout";
import { css } from "@emotion/core";
import { styleValues } from "../styles/styleValues";
import colorScheme from "../styles/colorScheme";
import { PostTags } from "../components/content/tags";

export type BlogPostProps = {
  pageContext: { post: Post };
};

export const BlogPost: React.FC<BlogPostProps> = ({
  pageContext: {
    post: { title, date, body, toc, tags },
  },
}) => (
  <Layout title={title} date={date} toc={toc}>
    <PostTags tags={tags} />

    <MDXProvider components={MDXComponents}>
      <MDXRenderer>{body}</MDXRenderer>
    </MDXProvider>
  </Layout>
);
export default BlogPost;