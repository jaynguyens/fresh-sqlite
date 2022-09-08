import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { Database, DatabaseProp } from "../utils/db.ts";

export async function handler(
  _req: Request,
  ctx: MiddlewareHandlerContext<DatabaseProp>,
) {
  ctx.state.sqlite = Database.instance();
  const resp = await ctx.next();
  return resp;
}
