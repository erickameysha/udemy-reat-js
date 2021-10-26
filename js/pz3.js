'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {

    }
}

// start()
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            console.log("done");
            personalMovieDB.movies[a] = b;
        } else {
            console.log("error");
            i--;
        }
    }
}
// rememberMyFilms()

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Посмотрели довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель ');
    } else if (personalMovieDB.count >= 30) {
        console.log("киноман");
    } else {
        console.log('Произошла ошибка');
    }
}
// detectPersonalLevel();

function showMyDB(hidden){
    if (!hidden){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
 for (let i = 1; i <= 3; i++) {
 const genre = prompt(`Ваш любимый жанр под номером ${i}`)
 personalMovieDB.genres[i - 1] = genre; 
 }
}
writeYourGenres()