import { initTRPC } from "@trpc/server";
import { createBunServeHandler } from "trpc-bun-adapter";

const t = initTRPC.create();

export const router = t.router({
    ping: t.procedure.query(() => "pong"),
});

Bun.serve(createBunServeHandler({ router }));
