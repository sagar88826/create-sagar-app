import { initTRPC } from "@trpc/server";
import type { Context } from "./context.js";

export const t = initTRPC.context<Context>().create();
