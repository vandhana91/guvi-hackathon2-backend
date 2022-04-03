const fs= require("fs");

const quote= "No beauty shines brighter than that of a good heart 👍"
fs.writeFile("./awesome.txt",quote,(err)=>{
    console.log("completed writing")
})