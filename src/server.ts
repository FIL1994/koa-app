import * as Koa from "koa";
import router from "./routes";

const app = new Koa();

app.use(async (ctx, next) => {
  console.log("url", ctx.url);

  await next();
});

app.use(router.routes());

app.listen(3000);

console.log("Server running on port 3000");
