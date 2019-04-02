import * as Router from "koa-router";
import * as jwt from "jsonwebtoken";

const router = new Router();
router.get("/login", async ctx => {
  ctx.body = jwt.sign({ data: "abc" }, "secret");
});

router.get("/*", async ctx => {
  ctx.body = "Hello World!";
});

export default router;
