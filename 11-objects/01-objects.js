/*OBJECTS
***********************
An object is a data type that constists of key/value pairs. 

let name = {
    (1)    (2)
  key   :   'value';
  (3)  (4)    (5)
}
1- Name of the object, how its identified
2- All of the data for an object is contained in curly braces
3- this is the name of the specific data inside the object
4- The data name and value are separated by a colon
5- The value of the data. Each key/value pairing ends with a comma */

var netflix = {
    id: 9,
    name: "Super Store",
      season1: {
        seasonInfo: {
          episodeInfo : [
            { episode: 1, episodeName: "Pilot"},
            { episode: 2, episodeName: "Magazine Profile"},
            { episode: 3, episodeName: "Shots and Salsa"},
            { episode: 4, episodeName: "Mannequin"},
            { episode: 5, episodeName: "Shoplifter"},
            { episode: 6, episodeName: "Secret Shopper"},
            { episode: 7, episodeName: "Color Wars"},
            { episode: 8, episodeName: "Wedding Day Sale"},
            { episode: 9, episodeName: "All-Nighter"},
            { episode: 10, episodeName: "Demotion"},
            { episode: 11, episodeName: "Labor"}
          ]
        }
      },
      season2: {},
      season3: {}
    };
let str = netflix.season1.seasonInfo.episodeInfo[3].episodeName
    console.log(`my favorite episode is ${str}`)
//console.log('all data', netflix.season1.seasonInfo)
//console.log('episode name', netflix.season1.seasonInfo.episodeInfo[0].episodeName)
console.log(netflix.season1.seasonInfo.episodeInfo[3].episodeName, `${'is my favorite episode of this season'}`)



let spaceJam = {
    toonSquad: {
      human: 'Michael Jordan',
      rabbit1: 'Bugs Bunny',
      rabbit2: 'Lola Bunny',
      duck: 'Daffy Duck',
      tDevil: 'Tasmanian Devil',
      bird: 'Tweety',
      cat: 'Sylvester',
      pig: 'Porky Pig'
    },
    monstars: {
      0: 'Bupkus',
      1: 'Bang',
      2: 'Nawt',
      3: 'Pound',
      4: 'Blanko'
    },
    nbaPlayers: {
      phoenixSuns: 'Charles Barkley',
      newJerseyNets: 'Shawn Bradley',
      newYorkNicks: 'Patrick Ewing',
      charlotteHornets1: 'Larry Johnson',
      charlotteHornets2: 'Muggsy Bogues'
    }
  }
  
  
  //HOW TO GET THE PLAYER NAMES//
  console.log(Object.values(spaceJam.nbaPlayers))
  
  //HOW TO GET THE TEAM NAMES//
  console.log(Object.keys(spaceJam.nbaPlayers))

  //THIS WILL GET YOU THE PLAYERS
let player = Object.keys(spaceJam.nbaPlayers)
  console.log(players)
  console.log(Object.values(spaceJam.nbaPlayers)[2])

  
  let garden = {
      vegetable: 'zucchini',
      flower: 'sun flower',
      fruit: 'grape',
      water: true,
      sun: true,
      size: 10
  };

  //THIS WILL GET YOU "ZUCCHINI"
  console.log(garden.vegetable)
  
  
  //SQUARE BRACKET NOTATION
  let x = 'vegetable';
 // console.log(garden[x])  WILL ALSO GET YOU "ZUCCHINI"

  let baking= {}
  baking['zucchini'] = "lets bake some bread"
  console.log(baking[garden[x]]) 



  let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
};

  let key = 'water';

   Object.keys(garden).forEach(g => {
       if (g == x){
           console.log('Yay, its', garden[x])
       } else {
           console.log("There's no water here =(")
       }
  })

  var bobAlcorn = {
    //3                    //4
    name             : "Bob Alcorn",
    age              : 59,
    vocation        : "Chief Operating Officer",
    isRetired        : false
};
console.log(bobAlcorn);


let player = {

  username  : "Luka",
  power     : 100,
  toughness : "metal"
};
console.log(player.username)


};