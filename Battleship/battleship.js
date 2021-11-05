


const location1 = 3;

const location2 = 4;

const location3 = 5;


let guess;


let hits = 0;

let guesses = 0;

let isSunk = false;




while(isSunk == false){

  guess = prompt("Podaj liczbe z zakresu od 1 do 6!");

  if(guess < 0 || guess > 6){

    alert('Podaj prawidlowa liczbe!')

  }else {

    guesses = guesses + 1;

    if (guess == location1 || guess == location2 || guess == location3) {

      hits = hits + 1;


      if (hits == 3) {

        isSunk = true;

        alert('Zatopiles moj okret!');

      }
    } else {
      alert('Pudło!')
    }
  }
}

const statystyka = "Potrzebowales" + guesses + "prob, by zatopic okret!";

alert(statystyka);