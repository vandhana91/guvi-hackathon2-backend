
//mongo
//use b27we
//db
db.film.insertMany([
    {
      id:1,
      name: "Master",
      image: "https://m.media-amazon.com/images/M/MV5BNmU1OTYzYzAtMDcyOS00MDI0LTg2ZmQtYTEyMDdmMmQ0MjY5XkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_FMjpg_UX1000_.jpg",
      rating: 8.8,
      summary: "John Durairaj, an alcoholic professor, gets enrolled to teach at a juvenile facility, unbeknownst to him. He soon clashes with a ruthless gangster, who uses the children as scapegoats for his crimes.",
      trailer: "https://www.youtube.com/embed/UTiXQcrLlv4"
    },
    {
      id:2,
      name: "96",
      image: "https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/96-Trisha-Vijay-Sethupathi-Trailer-Audio.jpg?itok=nqkQVh-B",
      rating: 8.5,
      summary: "K Ramachandran, a photographer, gets nostalgic after he visits his school in his hometown. During a reunion with his classmates, he meets Janaki, his childhood sweetheart.",
      trailer: "https://www.youtube.com/embed/r0synl-lI4I"
    },
    { id:3,
      name: "Doctor",
      image: "https://www.pinkvilla.com/imageresize/doctor_movie_review_main.jpg?width=752&format=webp&t=pvorg",
      rating: 8.2,
      summary: "When a military doctor tracks down his former fiancees kidnapped niece, he discovers a complex human trafficking ring in Goa. He then weaves an intricate trap to capture the perpetrators.",
      trailer: "https://www.youtube.com/embed/oQiH_Iw0kDs"
    },
    { id:4,
      name: "Bahubali 2",
      image: "https://m.media-amazon.com/images/M/MV5BODY0NTQ0MzctNmNlMi00MWUxLThmNTEtMGFhNjczYmVjYjcxXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
      rating: 9.2,
      summary: "After learning that his father was brutally killed by Bhallaladeva, Mahendra Baahubali raises an army to defeat him and release his mother from the formers captivity.",
      trailer: "https://www.youtube.com/embed/94BzBOpv42g"
    },
    { id:5,
      name: "Soorarai Pottru",
      image: "https://gumlet.assettype.com/swarajya%2F2020-11%2F3ad8ec93-097f-4fd6-94b1-671d4c532895%2Fsoo.jpg?w=1200&auto=format%2Ccompress&ogImage=true",
      rating: 7.9,
      summary: "Maara, a young man from a remote village, dreams of launching his own airline service. However, he must overcome several obstacles and challenges in order to be successful in his quest.",
      trailer: "https://www.youtube.com/embed/fa_DIwRsa9o"
    },
    { id:6,
      name: "Maanadu",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Maanaadu_poster.jpg/220px-Maanaadu_poster.jpg",
      rating: 8.5,
      summary: "On the day of a public conference by the states Chief Minister, his bodyguard and a police officer become stuck in a time loop.",
      trailer: "https://www.youtube.com/embed/t9retstFUlM"
    },
    { id:7,
      name: "Jai Bhim",
      image: "https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/jai_bhim_twiiter_review_1.jpg",
      rating: 8.9,
      summary: "A brave activist-lawyer fights for justice when a poor tribal man, who gets falsely accused of robbery, goes missing from the police custody.",
      trailer: "https://www.youtube.com/embed/pVOd8HAQQZM"
    },
    { id:8,
      name: "Sarkar",
      image: "https://images.indianexpress.com/2018/11/sarkar-759-1.jpg",
      rating: 8.9,
      summary: "An NRI businessman returns home and learns about the practice of fraudulent voting. When he decides to investigate, two corrupt politicians strive to block his path.",
      trailer: "https://www.youtube.com/embed/VkkyaodksT4"
    }
  ])
  db.movies.find({})
  db.movies.find({}).pretty()
  db.movies.find({
    "rating": {
      "$nin": [
        8.8,
        8.2
      ]
    }
  })
  db.movies.find({
    "rating": {
      "$nin": [
        8.8,
        8.2
      ]
    }
  }).count()
  //find count of documents
  db.movies.find({}).count()

  //include name
  db.movies.find({},{name:1}).pretty()

  //exclude name
  db.movies.find({},{name:0}).pretty()
//include name and rating
  db.movies.find({},{name:1,rating:1}).pretty()

  //exclude name and rating
  db.movies.find({},{name:0,rating:0}).pretty()

  //exclude id and include name and rating
  db.movies.find({},{_id:0,name:1,rating:1}).pretty()

  //sort by rating in ascending
  db.movies.find({},{_id:0,name:1,rating:1}).sort({rating:1}).pretty()

  //sort by rating in descending
  db.movies.find({},{_id:0,name:1,rating:1}).sort({rating:-1}).pretty()
  
  //sort by rating,name
  db.movies.find({},{_id:0,name:1,rating:1}).sort({rating:-1,name:1}).pretty()

  //limit first 2
  db.movies.find({},{_id:0,name:1,rating:1}).sort({rating:-1,name:1}).limit(2).pretty()

  //skip first 2
  db.movies.find({},{_id:0,name:1,rating:1}).sort({rating:-1,name:1}).limit(2).skip(2).pretty()

  //find movie except bahubali
  db.movies.find({name:{$nin:["Bahubali 2"]}},{rating:1,name:1}).pretty()

  //add language key to documents
  db.movies.updateMany({name:{$nin :["Bahubali 2"]}},{$set:{language:"tamil"}})

  db.movies.findOne({name:"Bahubali 2"})

  db.movies.updateOne({name:"Bahubali 2"},{$set:{language:"telugu"}})

  //get only tamil movies with rating>8.5
  db.movies.find({language:"tamil",rating:{$gt:8.5}},{_id:0,language:1,name:1,rating:1}).pretty()