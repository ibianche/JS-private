//
// class Person {
//   constructor(imie.nazwisko){
//      this.imie = imie;
//      this.nazwisko = nazwisko;
//   }
//
//   dopiszDoTablicy() {
//
//     const tablicaRzecia = [];
//
//     for (let i = 0; i < this.imie.length; i++) {
//       tablicaTrzecia[i] = imie[i];
//     }
//
//     for (let i = 0; i < this.nazwisko.length; i++) {
//       tablicaTrzecia[i + this.imie.length] = this.nazwisko[i];
//     }
//     return tablicaRzecia;
//   }
// }

//
// class Person {
//   constructor(imie, nazwisko) {
//     this.imie = imie;
//     this.nazwisko = nazwisko;
//   }
//
//   dopiszDoTablicy() {
//
//     const tablicaTrzecia = [];
//
//     for (let i = 0; i < this.imie.length; i++) {
//       tablicaTrzecia[i] = this.imie[i];
//     }
//
//     for (let i = 0; i < this.nazwisko.length; i++) {
//       tablicaTrzecia[i + this.imie.length] = this.nazwisko[i];
//     }
//
//     return tablicaTrzecia;
//   }
// }





class Person {
  constructor(imie,nazwisko){
    this.imie = imie;
    this.nazwisko = nazwisko;
  }

  dopiszDoTablicy(){

    const tablicaTrzecia = [];

    for(let i = 0; i < this.imie.length; i++){
      tablicaTrzecia[i] = this.imie[i];
    }

    for (let i = 0; i < this.nazwisko.length; i++){
      tablicaTrzecia[i+this.imie.length] = this.nazwisko[i];
    }
    return tablicaTrzecia;

}





}
















const imie1 = ['Wacus', 'Natalia', 'Puszok'];
const nazwisko1 = ['Naz', 'Wis', 'Ko'];
const personOne = new Person(imie1, nazwisko1);
console.log(personOne.dopiszDoTablicy());


const imie2 = ['Jarek', 'Mietek', 'Marek', 'Wojtek'];
const nazwisko2 = ['Kowalski', 'Janusewski', 'Mirowski', 'Matusiak'];
const personTwo = new Person(imie2, nazwisko2);
console.log(personTwo.dopiszDoTablicy());








