
const db = require("./database/db");

const express = require("express");
const server = express();

server.use(express.static("public"));


server.use(express.urlencoded({extended: true}));

const nunjucks = require("nunjucks");
nunjucks.configure("src/views",{
    express: server,
    noCache: true
});

server.get("/",(req,res)=>{
    db.all(`SELECT * FROM memes`,function(err,rows){
        if(err){
            return console.log(err);
        }
        
        return res.render("homemes.html",{
            memes: rows,
        });
    });
    
});
server.post("/killthememe",(req,res)=>{
    const num = parseInt(req.body.id);
    db.run(`DELETE FROM memes WHERE id = ?`,[num],(err)=>{
            if(err){
                return console.log(err);
            }
            console.log("registro deletado com sucesso!"); 
            return res.render("homemes.html");
        })

    
});
server.get("/mememake",(req,res)=>{
        return res.render("mememake.html");
        
    
});
server.post("/savethememe",(req,res)=>{
    const query=`
        INSERT INTO memes(
            image,
            mememaker
        ) VALUES (?,?);`;
    const values= [
        req.body.image,
        req.body.mememaker
    ];
    function afterInsertData(err){
        if (err){
            return console.log(err);
        }
        console.log("cadatrado com sucesso");
        console.log(this);
    }
    console.log(values);
    db.run(query, values,afterInsertData);
    return res.render("youaremememaker.html");
});
server.listen(3000);