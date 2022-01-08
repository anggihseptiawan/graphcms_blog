import { request, gql } from "graphql-request";

const graphQLAPI: any = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
console.log(graphQLAPI);

export const getPost = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              bio
              name
              photo {
                url
              }
              id
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphQLAPI, query);

  return result.postsConnection.edges;
};
