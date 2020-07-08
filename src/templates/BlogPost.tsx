import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXComponents } from "../components/atoms/mdx-components";
import { Layout } from "../components/layout";
import { PostTags } from "../components/content/tags";
import { graphql, PageProps } from "gatsby";
import { BlogPostQuery } from "../../types/graphqlTypes";
import { assertsNonNull } from "../libs/asserts-non-null";

export type BlogPostContext = {
  id: string;
};

export type BlogPostProps = PageProps<BlogPostQuery, BlogPostContext>;

export const BlogPost: React.FC<BlogPostProps> = ({
  pageContext: { id },
  data: { post },
}) => {
  const { body, date, tags, title, toc, path } = assertsNonNull(post);
  return (
    <Layout title={title} date={date} toc={toc} path={path}>
      <PostTags tags={tags} />

      <MDXProvider components={MDXComponents}>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  );
};
export default BlogPost;

export const pageQuery = graphql`
  query BlogPost($id: String) {
    post(id: { eq: $id }) {
      title
      date(formatString: "yy-MM-DD")
      body
      toc
      tags
      path
    }
  }
`;
