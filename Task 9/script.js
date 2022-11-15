/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite klasę "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, 
tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
class Movie {
  constructor(titleArg, directorArg, budgetArg) {
    this.title = titleArg;
    this.director = directorArg;
    this.budget = budgetArg;
  }
  wasExpensive() {
    if (this.budget > 100000000) {
      return true;
    } else {
      return false;
    }
  }
}

const movie = new Movie(
  "Karstas Puodelis",
  "Puodelis Puodeliauskas",
  1000000000
);
console.log("movie.wasExpensive ===", movie.wasExpensive());
