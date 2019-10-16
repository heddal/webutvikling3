

const places = [
  {id: 1,
    name: 'Paris',
    description: 'My first visit to Paris was a remarkable experience, which I will never forget. I booked the Dover-Calais ferry and drove with my wife from London in the cold Christmas weather. We intended to stay until the New Year in a hotel located in a suburb of Paris and visit the city every day. It was a great feeling to arrive in Paris and see the city of light ­– a modern city with a very deep sense of history. I will never forget when I first drove through, passing the canals and seeing the monuments. It was like a huge open-air museum. It was love at first sight.',
    continent: 'Europe',
    temperature: [-5, 30],
    mood: ['shopping', 'love'], //+ keywords?
    popularity: 0 // antall besøk her ? ev local storage?
  }, {id: 2,
    name: 'Bali',
    description: 'Also known as the Land of the Gods, Bali appeals through its sheer natural beauty of looming volcanoes and lush terraced rice fields that exude peace and serenity. It is also famous for surfers’ paradise! Bali enchants with its dramatic dances and colorful ceremonies, its arts, and crafts, to its luxurious beach resorts and exciting nightlife. And everywhere, you will find intricately carved temples.',
    continent: 'Asia',
    temperature: [10, 40],
    mood: ['adventure', 'chill', 'beach'],
    popularity: 0
  }
]


// Funker ikke med path-en til rome.json :((
//
// var fs=require('fs');
// var rome=fs.readFileSync('rome.json', 'utf8');
// var words=JSON.parse(rome);
// console.log(words);

module.exports = places
