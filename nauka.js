// toDo 1. klasa Osoby ma imie nazwisko wiek data ur samochod
// toDo 2. klasa Samochod ktora ma kolor marke przebieg km
// toDo 3. Korzystac z klasy 2 w klasie 1
// toDo 4. Funkcja w klasie osoba ktora na podstawie daty ur zwraca wiek osoby


class Person {
  constructor(name, surname, age, birthDate, car, favoriteColor) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.birthDate = birthDate;
    this.car = car;
    this.favoriteColor = favoriteColor;
  }


  getPersonMonth() {

    const wiek = this.birthDate;
    const osobnoLiczba = wiek.split('');

    const wiekLiczba = osobnoLiczba[3] + osobnoLiczba[4];

    const nowaLiczba = parseInt(wiekLiczba);

    return nowaLiczba;
  }

  getZnakZodiaku() {

    const dictionaries = {
      "Wodnik": 1, "Ryby": 2, "Baran": 3, "Byk": 4,
      "Bliznieta": 5, "Rak": 6, "Lew": 7, "Panna": 8, "Waga": 9, "Skorpion": 10, "Strzelec": 11, "Koziorozec": 12
    };

    const month = this.getPersonMonth();

    for (let dictionary in dictionaries) {
      // console.log(dictionaries[dictionary]);   jest wartoscia
      //console.log(dictionary);  jest kluczem
      if (month == dictionaries[dictionary]) {
        return dictionary;
      }
    }
  }

  getPersonActualYear() {

    const year = this.birthDate;
    const zmianaWieku = year.split('');
    console.log(zmianaWieku);
    const nowyRok = zmianaWieku[6] + zmianaWieku[7] + zmianaWieku[8] + zmianaWieku[9];
    console.log(nowyRok);
    const nowaLiczba2 = parseInt(nowyRok);
    console.log(nowaLiczba2);


    const actuallyYear = new Date();
    const fullYear = actuallyYear.getFullYear();
    console.log(fullYear);
    console.log(year);

    const result = fullYear - nowaLiczba2;
    return result;


  }


}

class Car {
  constructor(color, brand, km) {
    this.color = color;
    this.brand = brand;
    this.km = km;
  }


  getColor() {
    return this.color;
  }


}

const fura = new Car('czarne', 'bmw', 696969);
const Maz = new Person('Hubert', 'Pomorski', 34, '30.10.1987', fura, fura.getColor());
//console.log(Maz);

console.log(Maz.getZnakZodiaku());

console.log(Maz.getPersonActualYear());

//console.log(Maz.getPersonMonth());

const fura2 = new Car('zloty', 'mercedes', 1111);
const Zona = new Person('Inna', 'Pomorska', 24, '02.04.1997', fura2, fura2.getColor());
//console.log(Zona);

console.log(Zona.getZnakZodiaku());

console.log(Zona.getPersonActualYear());

//console.log(Zona.getPersonMonth());




