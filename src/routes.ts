import { Context } from "koa";
import * as Router from "koa-router";
import * as jwt from "jsonwebtoken";
import { User } from "./entity/User";

const router = new Router();
router.get("/login", async (ctx: Context) => {
  ctx.body = jwt.sign({ data: "abc" }, "secret");
});

router.post("/signup", async (ctx: Context) => {
  const user = new User(ctx.request.body);
  ctx.body = user;
});

router.get("/*", async ctx => {
  ctx.body = "Hello World!";
});

export default router;
