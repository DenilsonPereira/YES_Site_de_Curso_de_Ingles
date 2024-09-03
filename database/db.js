import sqlite3 from "sqlite3"; //BD
import {open} from "sqlite"; //Drive de conexao

const dbPromise = open({
    filename: "./database/yesidiomas.db",
    driver: sqlite3.Database
});

export { dbPromise }