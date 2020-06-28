import React from "react";
import { PageProps, graphql } from "gatsby";
import { Layout } from "../components/layout";
import { PostList } from "../components/post-link/post-list";
import { IndividualTagPageQuery } from "../../types/graphqlTypes";

export type IndividualTagPageContext = {
  tag: string;
};
export type IndividualTagPageProps = PageProps<
  IndividualTagPageQuery,
  IndividualTagPageContext
>;

export const IndividualTagPage: React.FC<IndividualTagPageProps> = ({
  pageContext: { tag },
  data: {
    allPost: { edges },
  },
}) => (
  <Layout title={`tag: ${tag}`} path={`tags/${tag}`}>
    <div>
      <PostList edges={edges} />
    </div>
  </Layout>
);

export default IndividualTagPage;

export const pageQuery = graphql`
  query IndividualTagPage($tag: String) {
    allPost(filter: { tags: { eq: $tag } }) {
      edges {
        node {
          title
          path
          tags
        }
      }
    }
  }
`;
