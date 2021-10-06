import { PROD } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { User } from "./entities/User";


export default {
    migrations: {
        path: path.join(__dirname, './migrations'),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    entities: [Post, User],
    user: "bertlz",
    password: "Ajf0s0dJFJ69LASK96",
    dbName: "dbz",
    type: 'postgresql',
    debug: !PROD,

} as Parameters<typeof MikroORM.init>[0];


