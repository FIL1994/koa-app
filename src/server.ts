import "reflect-metadata";
import * as Koa from "koa";
import * as helmet from "koa-helmet";
import * as bodyParser from "koa-bodyparser";
import * as jwt from "koa-jwt";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import router from "./routes";

createConnection()
  .then(async connection => {
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
  })
  .catch(error => console.log(error));
