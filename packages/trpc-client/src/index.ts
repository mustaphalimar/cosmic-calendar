import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { AppRouter } from "@trpc-monorepo/trpc-server/routers";

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:8080/trpc",
    }),
  ],
  transformer: undefined,
});
