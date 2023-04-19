import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            color
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
  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        author {
          bio
          name
          id
          photo {
            url
          }
        }
        createdAt
        slug
        title
        color
        excerpt
        projectDesc
        competitiveAnalysis
        competitiveAnalysis2
        competitiveAnalysis3
        projectGoals
        firstGoal
        secondGoal
        solution
        solution1
        solution2
        solution3
        research
        primaryResearch
        secondaryResearch
        secondary1
        secondary2
        secondary3
        ideation
        ideationDesc
        prototyping
        prototypingDesc1
        finalDesign
        finalDesignDesc1
        finalDesignDesc2
        finalDesignDesc3
        finalDesignDesc4
        lastDesc
        featuredImage {
          url
        }
        image2 {
          url
        }
        image3 {
          url
        }
        ideationImg {
          url
        }
        prototypingImg1 {
          url
        }
        prototypingImg2 {
          url
        }
        finalDesignImg1 {
          url
        }
        finalDesignImg2 {
          url
        }
        finalDesignImg3 {
          url
        }
        finalDesignImg4 {
          url
        }
        finalDesignImg5 {
          url
        }
        categories {
          name
          slug
        }
        content {
          raw
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug });

  return result.post;
};

export const submitComment = async (obj) => {
  const result = await fetch("/api/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });

  return result.json();
};

export const getComments = async (slug) => {
  const query = gql`
    query GetComments($slug: String!) {
      comments(where: { post: { slug: $slug } }) {
        name
        createdAt
        comment
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.comments;
};
