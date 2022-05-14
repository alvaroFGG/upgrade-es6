// 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los valores que sean mayor que 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const above18Arr = ages.filter(age => {
    if(age>18){
        return age;
    }
});
console.log(above18Arr);

// 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los valores que sean par.
// const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const evenNum = ages.filter(age =>{
    if(age%2==0){
        return age;
    }
});
console.log(evenNum);


// 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const onlyLolStreamers = streamers.filter(streamer => {
    if(streamer.gameMorePlayed==="League of Legends"){
        return streamer.name;
    }
});
console.log(onlyLolStreamers);

// 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
// usar la funcion .includes() para la comprobación.
const uLetterIn = streamers.filter(streamer => {
    if(streamer.name.includes("u")){
        return streamer.name;
    }
});
console.log(uLetterIn);

// 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
// el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
// .includes() para la comprobación.
// Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
// .age sea mayor que 35.
const filterWithStreamers = streamers.filter(streamer => {
    if(streamer.gameMorePlayed.includes("Legends")){
        if(streamer.age>35){
            let juego = streamer.gameMorePlayed;
            streamer.gameMorePlayed = juego.toUpperCase();
        }
        return streamer;
    }
});
console.log(filterWithStreamers);

