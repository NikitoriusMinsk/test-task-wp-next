import { gql } from "@apollo/client";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { query } from "~/server/utils/ApolloClient";

// Mocked DB
interface Post {
  id: number;
  name: string;
}
const posts: Post[] = [
  {
    id: 1,
    name: "Hello World",
  },
];

export const postRouter = createTRPCRouter({
  get: publicProcedure
    .input(z.object({ count: z.number() }))
    .query(({ input }) => {
      const { count } = input;
      return query({
        query: gql`
          query postsQuery {
            posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
              edges {
                node {
                  title
                  excerpt
                  slug
                }
              }
            }
          }
        `,
      });
    }),
});
