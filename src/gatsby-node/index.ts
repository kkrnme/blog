import { GatsbyNode, CreatePagesArgs } from "gatsby"
import {
  MdxConnection,
  MdxEdge,
  MdxFrontmatter,
} from "../../types/graphqlTypes"
import Path from "path"
import { Post } from "../libs/post"
import { compact, concat, uniqBy, unzip, toPairs } from "lodash"
import _ from "lodash"
import IndividualTagPage, {
  IndividualTagPageContext,
} from "../components/templates/IndividualTagPage"

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions: { createPage },
  reporter,
}) => {
  console.log("хорошо!")
  const result = await graphql<{
    allMdx: Pick<MdxConnection, "edges">
  }>(`
    query gatsbyNode {
      allMdx(filter: { frontmatter: { status: { ne: "private" } } }) {
        edges {
          node {
            id
            tableOfContents(maxDepth: 10)
            fileAbsolutePath
            body
            excerpt
            frontmatter {
              status
              tags
              title
            }
          }
          next {
            frontmatter {
              title
            }
          }
          previous {
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(result.errors)
    return
  }
  if (!result.data) {
    reporter.panicOnBuild("result.data is undefined")
    return
  }

  const tagTmpArray: string[] = []
  const classifiedPosts: { [index: string]: Post[] } = {}

  result.data.allMdx.edges.forEach(edge => {
    const post = Post(edge)
    createPage({
      path: post.path ?? post.id,
      component: Path.resolve("./src/components/templates/BlogPost.tsx"),
      context: { post: post },
    })
    post.tags.forEach(t => {
      if (classifiedPosts[t] == null) {
        classifiedPosts[t] = []
      }
      classifiedPosts[t].push(post)
    })
    tagTmpArray.push(...post.tags)
  })

  tagTmpArray.forEach(tag =>
    createPage<IndividualTagPageContext>({
      path: "/tags/" + tag,
      component: Path.resolve(
        "./src/components/templates/IndividualTagPage.tsx"
      ),
      context: { tag: tag, posts: classifiedPosts[tag] },
    })
  )
}