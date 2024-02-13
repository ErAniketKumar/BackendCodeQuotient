const express=require('express');
const app=express();
const PORT=3001;
const fs=require('fs');
const url=require('url');

app.get('/',(req, res)=>{
    res.sendFile('./products.json',{root:__dirname});
    const searchURL=url.parse(req.url,true).query;
    const data = fs.readFileSync('./ST1Module/products.json', 'utf8');
    // console.log('this is link', searchURL);
    const products = JSON.parse(data);
    products.forEach(element => {
        if(element.Category===searchURL.Catogory)
        {
            res.send(element);
        }
    });
    
})



app.listen(PORT,(error)=>{
    if(error)
    {
        console.log("unable to start server");
    }
    else console.log("Server started.");
});


