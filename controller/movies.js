let movieList=(req,res)=>{
    var mediaJSON = [ 
		    { "sources" :  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" ,
              "released_date" : "2023-01-05",
              "rating" :3,
              "name" : "Big Buck Bunny"
            },
            { "sources" :  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" ,
              "released_date" : "2023-01-05",
              "rating" :4,
              "name" : "Elephant Dream"
            },
            { "sources" :  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" ,
              "released_date" : "2023-01-05",
              "rating" :1,
              "name" : "For Bigger Blazes"
            },
            { "sources" :  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" ,
              "released_date" : "2023-01-05",
              "rating" :2,
              "name" : "For Bigger Escape"
            },
            { "sources" :  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" ,
              "released_date" : "2023-01-05",
              "rating" :5,
              "name" : "For Bigger Fun"
            },
            { "sources" :  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" ,
              "released_date" : "2023-01-05",
              "rating" :4,
              "name" : "For Bigger Joyrides"
            },
            { "sources" :  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" ,
              "released_date" : "2023-01-05",
              "rating" :4,
              "name" : "For Bigger Meltdowns"
            },
			{ "sources" :  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" ,
              "released_date" : "2023-01-05",
              "rating" :3,
              "name" : "Sintel"
            },
			{ "sources" :  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4" ,
              "released_date" : "2023-01-05",
              "rating" :3,
              "name" : "Subaru Outback On Street And Dirt"
            },
			{ "sources" :  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" ,
              "released_date" : "2023-01-05",
              "rating" :3,
              "name" : "Tears of Steel"
            },
			{ "sources" :  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4" ,
              "released_date" : "2023-01-05",
              "rating" :2,
              "name" : "Volkswagen GTI Review"
            },
			{ "sources" :  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4" ,
              "released_date" : "2023-01-05",
              "rating" :3,
              "name" : "We Are Going On Bullrun"
            },
			{ "sources" :  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4" ,
              "released_date" : "2023-01-05",
              "rating" :3,
              "name" : "Bullrun"
            },{ "sources" :  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" ,
            "released_date" : "2023-01-05",
            "rating" :3,
            "name" : "Big Buck Bunny"
          },
          { "sources" :  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" ,
            "released_date" : "2023-01-05",
            "rating" :4,
            "name" : "Elephant Dream"
          },
          { "sources" :  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" ,
            "released_date" : "2023-01-05",
            "rating" :1,
            "name" : "For Bigger Blazes"
          },
          { "sources" :  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" ,
            "released_date" : "2023-01-05",
            "rating" :2,
            "name" : "For Bigger Escape"
          },
          { "sources" :  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" ,
            "released_date" : "2023-01-05",
            "rating" :5,
            "name" : "For Bigger Fun"
          },
          { "sources" :  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" ,
            "released_date" : "2023-01-05",
            "rating" :4,
            "name" : "For Bigger Joyrides"
          },
          { "sources" :  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" ,
            "released_date" : "2023-01-05",
            "rating" :4,
            "name" : "For Bigger Meltdowns"
          },
          { "sources" :  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" ,
            "released_date" : "2023-01-05",
            "rating" :3,
            "name" : "Sintel"
          },
          { "sources" :  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4" ,
            "released_date" : "2023-01-05",
            "rating" :3,
            "name" : "Subaru Outback On Street And Dirt"
          },
          { "sources" :  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" ,
            "released_date" : "2023-01-05",
            "rating" :3,
            "name" : "Tears of Steel"
          },
          { "sources" :  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4" ,
            "released_date" : "2023-01-05",
            "rating" :2,
            "name" : "Volkswagen GTI Review"
          },
          { "sources" :  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4" ,
            "released_date" : "2023-01-05",
            "rating" :3,
            "name" : "We Are Going On Bullrun"
          },
          { "sources" :  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4" ,
            "released_date" : "2023-01-05",
            "rating" :3,
            "name" : "Bullrun"
          }
    ];
    res.json(mediaJSON);
}

module.exports={movieList}