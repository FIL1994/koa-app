import * as Koa from "koa";
import * as helmet from "koa-helmet";
import * as bodyParser from "koa-bodyparser";
import * as jwt from "koa-jwt";
import router from "./routes";

const app = new Koa();

app.use(helmet());
app.use(bodyParser());

app.use(jwt({ secret: "secret" }).unless({ path: [/^\/login/] }));

app.use(async (ctx, next) => {
  console.log("url", ctx.url);

  await next();
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);

console.log("Server running on port 3000");
