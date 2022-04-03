//const express = require('express')
import express from "express";
import dotenv from "dotenv";
import { request } from "express";
import { MongoClient } from "mongodb";
const app = express()

const PORT = 4000;
const movies=[
  {
    "id":1,
    "name":"Master",
  "image":'https://m.media-amazon.com/images/M/MV5BNmU1OTYzYzAtMDcyOS00MDI0LTg2ZmQtYTEyMDdmMmQ0MjY5XkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_FMjpg_UX1000_.jpg',
  
  "rating":"⭐8.8",
  "summary":"John Durairaj, an alcoholic professor, gets enrolled to teach at a juvenile facility, unbeknownst to him. He soon clashes with a ruthless gangster, who uses the children as scapegoats for his crimes.",
  "trailer":"https://www.youtube.com/embed/UTiXQcrLlv4"
},
  {
    "id":2,
    "name":"96",
  "image":'https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/96-Trisha-Vijay-Sethupathi-Trailer-Audio.jpg?itok=nqkQVh-B',
  
  "rating":"⭐8.5",
  "summary":'K Ramachandran, a photographer, gets nostalgic after he visits his school in his hometown. During a reunion with his classmates, he meets Janaki, his childhood sweetheart.',
  "trailer":"https://www.youtube.com/embed/r0synl-lI4I"  
},
  {
    "id":3,
    "name":"Doctor",
    "image":'https://www.pinkvilla.com/imageresize/doctor_movie_review_main.jpg?width=752&format=webp&t=pvorg',
   
    "rating":"⭐8.2",
    "summary":'When a military doctor tracks down his former fiancees kidnapped niece, he discovers a complex human trafficking ring in Goa. He then weaves an intricate trap to capture the perpetrators.',
    "trailer":"https://www.youtube.com/embed/oQiH_Iw0kDs"  
  },
    {
      "id":4,
      "name":"Bahubali 2",
      "image":'https://m.media-amazon.com/images/M/MV5BODY0NTQ0MzctNmNlMi00MWUxLThmNTEtMGFhNjczYmVjYjcxXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg',
      
      "rating":"⭐9.2",
      "summary":'After learning that his father was brutally killed by Bhallaladeva, Mahendra Baahubali raises an army to defeat him and release his mother from the formers captivity.',
      "trailer":"https://www.youtube.com/embed/94BzBOpv42g"
    },
      {
        "id":5,
        "name":"Soorarai Pottru",
        "image":'https://gumlet.assettype.com/swarajya%2F2020-11%2F3ad8ec93-097f-4fd6-94b1-671d4c532895%2Fsoo.jpg?w=1200&auto=format%2Ccompress&ogImage=true',
        
        "rating":"⭐7.9",
        "summary":'Maara, a young man from a remote village, dreams of launching his own airline service. However, he must overcome several obstacles and challenges in order to be successful in his quest.',
        "trailer":"https://www.youtube.com/embed/fa_DIwRsa9o"
        },
        {
          "id":6,
          "name":"Maanadu",
          "image":'https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Maanaadu_poster.jpg/220px-Maanaadu_poster.jpg',
          
          "rating":"⭐8.5",
          "summary":'On the day of a public conference by the states Chief Minister, his bodyguard and a police officer become stuck in a time loop.',
          "trailer":"https://www.youtube.com/embed/t9retstFUlM"
          },
          {
            "id":7,
            "name":"Jai Bhim",
            "image":'https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/jai_bhim_twiiter_review_1.jpg',
            
            "rating":"⭐8.9",
            "summary":'A brave activist-lawyer fights for justice when a poor tribal man, who gets falsely accused of robbery, goes missing from the police custody.',
            "trailer":"https://www.youtube.com/embed/pVOd8HAQQZM"
            },
            {
              "id":8,
              "name":"Sarkar",
              
              "image":'https://images.indianexpress.com/2018/11/sarkar-759-1.jpg',
              "rating":"⭐8.9",
              "summary":'An NRI businessman returns home and learns about the practice of fraudulent voting. When he decides to investigate, two corrupt politicians strive to block his path.',
              "trailer":"https://www.youtube.com/embed/VkkyaodksT4"
              },


];

//mongodb+srv://ksvandhana91:welcome@cluster0.ynbd0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const MONGO_URL = "mongodb://localhost";
//const MONGO_URL= "mongodb+srv://ksvandhana91:welcome@cluster0.ynbd0.mongodb.net";
async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("Mongo is connect 👍✨✨");
  return client;
}

const client= await createConnection();

app.use(express.json());
app.get('/', function (req, res) {
  res.send('Hello World 😃🌹👏🎁✔')
})
app.get('/movies', async function (request, response) {
  const film= await client.db("b27we").collection("film").find().toArray();
  response.send(film)
});

app.get('/movies/:id', 
async function (request, response) {
  const { id } =request.params;
  const film= await client.db("b27we").collection("film").findOne({ id: id});
  console.log(film);
  //const movie=movies.find((mv)=>mv.id==id);
  response.send(film)
});
app.post('/movies', async function (request, response) {
  const newmovies=request.body;
  const result = await client.db("b27we").collection("film").insertMany(newmovies);
  response.send(result);
});
app.listen(PORT,()=>console.log(`server started in ${PORT}`));