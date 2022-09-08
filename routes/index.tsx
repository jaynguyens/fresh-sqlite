import { Handlers } from "$fresh/server.ts";
import { ContextType } from "https://esm.sh/v94/preact@10.10.6/src/index.d.ts";
import Counter from "../islands/Counter.tsx";
import { DatabaseProp } from "../utils/db.ts";

export default function Home() {
  return (
    <div class="p-4 mx-auto max-w-screen-md">
      <img
        src="/logo.svg"
        class="w-32 h-32"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p class="my-6">
        Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <Counter start={3} />
    </div>
  );
}

// deno-lint-ignore no-explicit-any
export const handler: Handlers<any, DatabaseProp> = {
  GET(_, ctx) {
    const { sqlite: { database } } = ctx.state;

    return ctx.render(database);
  },
};
