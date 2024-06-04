// import { TRPCError } from "@trpc/server";
// import { t } from "./trpc";
// import { Role } from "./types";
// import * as jwt from "jsonwebtoken";

// export const isAuthed = (...roles: Role[]) =>
//   t.middleware(async (options) => {
//     const { token } = options.ctx;

//     if (!token)
//       throw new TRPCError({ code: "FORBIDDEN", message: "Token not found." });

//     console.log(token);
//     let userId;

//     try {
//       const user = await jwt.verify(token, process.env.NEXTAUTH_SECRET || "");
//       userId = (user as jwt.JwtPayload).id;
//     } catch (error) {
//       throw new TRPCError({
//         code: "FORBIDDEN",
//         message: "Invalid Token",
//       });
//     }

//     return options.next({ ...options, ctx: { ...options.ctx, userId } });
//   });
