import { inferRouterOutputs } from "@trpc/server";
import { router } from "../trpc";
import { publicProcedure } from "../trpc";

export const appRouter = router({
  hello: publicProcedure.query(() => {
    return { message: "Hello" };
  }),
});

export type AppRouter = typeof appRouter;
export type AppRouterType = inferRouterOutputs<AppRouter>;
