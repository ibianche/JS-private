let clientsRecords = [
  [{address: "Babickiego", nr: "2"}, {polisa: "Pzu", typPolis: "zycie"}, {mobile: "600302061", email: 'janachowska@wp.pl'}],
  [{address: "Piotrkowska", nr: "2"}, {polisa: "Alianz", typPolis: "zdrowie"}, {mobile: "543569842", email: 'pershing@wp.pl'}],
  [{address: "Rzeligowskiego", nr: "2"},{polisa: "Ing", typPolis: "biznes"},{mobile: "500702061", email: 'malaga@wp.pl'}],
  [{address: "Krucza", nr: "2"},{polisa: "Pionier", typPolis: "zdrowie"}, {mobile: "500382061", email: 'liszaj@wp.pl'}],
];


for(let i = 0; i < clientsRecords.length; i++) {
//  console.log('wiersz:'+ i);
  for(let j = 0; j < clientsRecords[i].length; j++) {
    //  console.log('kolumna:'+j);
  //    console.log(clientsRecords[i][j]);
  }
}


//console.log('*****test!!!!*************');
//console.log('wiersz klienta: 2,'+ clientsRecords[2][0].address + ',' + clientsRecords[2][2].email);




// toDo napisac klase bazy danych klientow, ktora jako skladowa posiada tablice wielowymiarowa gdzie 1 index to wiersz klienta ,
//  a 2 index to kolejno jego : adres, ubezpieczenie, dane adr. Klasa musi umozliwic dodanie kolejnego klienta, wyswietlenie klienta
// toDo i usuniecie klienta.



class BazaDanychKlientow {

  constructor(){

     this.clientsRecords = [

    ];
  }

  dodajKlienta(klient) {

    const ostatni = this.clientsRecords.length;
    this.clientsRecords[ostatni] = klient;
  }

  getClientRecords(){
    return this.clientsRecords;
  }


  showClientRecord() {

    for (let i = 0; i < this.clientsRecords.length; i++) {
      for (let j = 0; j < this.clientsRecords[i].length; j++) {
        console.log(this.clientsRecords[i][j]);
      }
    }
  }

  kasujKlienta (numerek){

    this.clientsRecords[numerek] = [];

  }
}




const klientOne =  [{address: "Babickiego", nr: "2"}, {polisa: "Pzu", typPolis: "zycie"}, {mobile: "600302061", email: 'janachowska@wp.pl'}];
//console.log(klientOne);
const klientTwo = [{address: "Piotrkowska", nr: "2"}, {polisa: "Alianz", typPolis: "zdrowie"}, {mobile: "543569842", email: 'pershing@wp.pl'}];



const baza = new BazaDanychKlientow();
baza.dodajKlienta(klientOne);
baza.dodajKlienta(klientTwo);
//baza.showClientRecord();
baza.kasujKlienta(1);
baza.showClientRecord();
