import * as Koa from "koa";
import * as helmet from "koa-helmet";
import * as bodyParser from "koa-bodyparser";
import router from "./routes";

const app = new Koa();

app.use(helmet());
app.use(bodyParser());

app.use(async (ctx, next) => {
  console.log("url", ctx.url);

  await next();
});

app.use(router.routes());

app.listen(3000);

console.log("Server running on port 3000");
