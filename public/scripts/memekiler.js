const db = require("./../../src/database/db");

const docs = document
            .querySelectorAll("button");
function listAllButton(){
    for (doc of docs){
        doc.addEventListener("click",killerB);
    }
}
console.log("foi");
listAllButton();
function killerB(event){

}