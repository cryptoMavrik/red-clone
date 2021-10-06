import { EntityManager, IDatabaseDriver, Connection } from "@mikro-orm/core";
import { Request, Response } from "express";
import { Cookie } from "express-session";

interface UserSession {
    id: string,
    cookie: Cookie,
    userId: number
}

export type MyContext = {
    em: EntityManager<IDatabaseDriver<Connection>>;
    req: Request & { session: UserSession | any };
    res: Response;
}