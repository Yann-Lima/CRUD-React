import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "Yann",
    password: "yannlima",
    database: "crudreact"
});

