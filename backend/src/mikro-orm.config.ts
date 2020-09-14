import path from "path";

import { __prod__ } from "./constants";
import { MikroORM } from "@mikro-orm/core";

import { Post } from "./entities/Post";
import { User } from "./entities/User";

export default {
  migrations: {
    path: path.join(__dirname, "migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post, User],
  dbName: process.env.PG_NAME,
  port: process.env.PG_PORT,
  password: process.env.PG_PASS,
  type: "postgresql",
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];