import { JSONFilePreset } from "lowdb/node";
import { __dirname, __filename } from "../file.js";
import path from "path";

export const db = await JSONFilePreset(
    path.join(__dirname, "db", "localDB.json"),
    {
        branch: [],
        sem: [],
        sub: [],
        year: [],
    }
);
