const sql = require("sqlite3").verbose();

const db = new sql.Database("./src/database/database.db");

module.exports = db;
// db.serialize(()=>{
//     db.run(`
//         CREATE TABLE IF NOT EXISTS memes (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             mememaker TEXT 
//         );
//     `)
    // const query=`
    //     INSERT INTO memes(
    //         image,
    //         mememaker
    //     ) VALUES (?,?);`;
    // const values= [
    //     "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F740349626228867168%2F&psig=AOvVaw22MUxKBu8COm5SvnU5p50e&ust=1591570210796000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIjqyZ2j7ukCFQAAAAAdAAAAABAD",
    //     "el chavo"
    // ];
    // function afterInsertData(err){
    //     if (err){
    //         return console.log(err);
    //     }
    //     console.log("cadatrado com sucesso");
    //     console.log(this);
    // }
    // db.run(query, values,afterInsertData);
    // db.all(`SELECT * FROM memes`,function(err,rows){
    //         if(err){
    //             return console.log(err);
    //         }
    //         console.log("aqui estão seus registros: ")
    //         console.log(rows);
    //     });
// });