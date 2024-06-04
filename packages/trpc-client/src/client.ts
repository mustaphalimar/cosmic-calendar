import { createTRPCReact } from '@trpc/react-query';
import { AppRouter } from '@trpc-monorepo/trpc-server/routers';

export const trpcClient = createTRPCReact<AppRouter>();
