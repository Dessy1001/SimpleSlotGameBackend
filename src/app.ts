import express from 'express';

const hostname = '127.0.0.1';
const port = 3000;

const app = express();

app.use(express.json());

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});

export default class Slot {
  public static spin() {
    for(let i = 0; i < this.rowsCount; i++) {
      let counter1 = 0;
      let counter2 = 0;
      let counter3 = 0;
      let counter4 = 0;
      let counter5 = 0;
      let counter6 = 0;
      let counter7 = 0;
      let counter8 = 0;
      let counter9 = 0;

      let maxPayout = 0;

      let displaySymbols = '';
      let linesPayout = 0;
      let reelsPosition = 0;

      for(const reel of this.reels) {
        reelsPosition = Math.floor(Math.random() * this.reels[1].length);
        displaySymbols += reel[reelsPosition];
      }    

      for(let i = 0; i < this.reelsCount; i++) {
        if (displaySymbols[i] === '1'){
          counter1 ++;
        } else if (displaySymbols[i] === '2'){
          counter2 ++;
        } else if (displaySymbols[i] === '3'){
          counter3 ++;
        } else if (displaySymbols[i] === '4'){
          counter4 ++;
        } else if (displaySymbols[i] === '5'){
          counter5 ++;
        } else if (displaySymbols[i] === '6'){
          counter6 ++;
        } else if (displaySymbols[i] === '7'){
          counter7 ++;
        } else if (displaySymbols[i] === '8'){
          counter8 ++;
        } else if (displaySymbols[i] === '9'){
          counter9 ++;
        };

        if (counter1 === 3){
          linesPayout += this.symbols[1][2];
        } else if (counter1 === 4) {
            linesPayout += this.symbols[1][3];
        } else if (counter1 === 5) {
            linesPayout += this.symbols[1][4];
        } else if (counter2 === 3) {
            linesPayout += this.symbols[2][2];
        } else if (counter2 === 4) {
            linesPayout += this.symbols[2][3];
        } else if (counter2 === 5) {
            linesPayout += this.symbols[2][4];
        } else if (counter3 === 3) {
            linesPayout += this.symbols[3][2];
        } else if (counter3 === 4) {
            linesPayout += this.symbols[3][3];
        } else if (counter3 === 5) {
            linesPayout += this.symbols[3][4];
        } else if (counter4 === 3) {
          linesPayout += this.symbols[4][2];
        } else if (counter4 === 4) {
          linesPayout += this.symbols[4][3];
        } else if (counter4 === 5) {
            linesPayout += this.symbols[4][4];
        } else if (counter5 === 3) {
            linesPayout += this.symbols[5][2];
        } else if (counter5 === 4) {
            linesPayout += this.symbols[5][3]; 
        } else if (counter5 === 5) {
            linesPayout += this.symbols[5][4]; 
        } else if (counter6 === 3) {
            linesPayout += this.symbols[6][2];
        } else if (counter6 === 4) {
            linesPayout += this.symbols[6][3];
        } else if(counter6 === 5) {
            linesPayout += this.symbols[6][4];
        } else if (counter7 === 3) {
            linesPayout += this.symbols[7][2];
        } else if (counter7 === 4) {
            linesPayout += this.symbols[7][3];
        } else if (counter7 === 5) {
            linesPayout += this.symbols[7][4];
        } else if (counter8 === 3) {
            linesPayout += this.symbols[8][2];
        } else if (counter8 === 4) {
            linesPayout += this.symbols[8][3];
        } else if(counter8 === 5) {
            linesPayout += this.symbols[8][4];
        } else if (counter9 === 3) {
            linesPayout += this.symbols[9][2];
        } else if (counter9 === 4) {
            linesPayout += this.symbols[9][3];
        } else if (counter9 === 5) {
            linesPayout += this.symbols[9][4];
        }
      }

      const result = {'reelsPosition': reelsPosition, 'displayedSymbols': displaySymbols, 'linesPayout': linesPayout};

      console.log(result);
    };  
  }
  
  public static symbols = {
    1: [0, 0, 10, 20, 50],
    2: [0, 0, 20, 40, 100],
    3: [0, 0, 30, 60, 150],
    4: [0, 0, 40, 80, 200],
    5: [0, 0, 50, 100, 250],
    6: [0, 0, 100, 200, 500],
    7: [0, 0, 150, 300, 800],
    8: [0, 0, 200, 400, 1000],
    9: [0, 0, 300, 600, 2000],
  };
  
  private static reels = [
    [
      1, 1, 2, 2, 9, 9, 3, 3, 1, 1, 8, 8, 8, 3, 3, 6, 6, 1, 1, 7, 7, 2, 2, 6, 6,
      1, 1, 8, 8, 2, 2, 5, 5, 4, 4, 4, 1, 1, 4, 4, 2, 2, 3, 3, 4, 4, 9, 9, 3, 3,
      2, 2, 1, 1, 9, 9, 1, 1, 4, 4, 8, 8, 2, 2, 5, 5, 5, 3, 3, 1, 1, 7, 7, 3, 3,
      6, 6, 7, 7, 2, 2, 6, 6, 6, 1, 1, 8, 8, 2, 2, 7, 7, 5, 5, 5, 1, 1, 6, 6, 4,
      4, 3, 3, 4, 4, 5, 5, 3, 3, 2, 2, 1, 1, 1, 1, 2, 2, 9, 9, 3, 3, 1, 1, 8, 8,
      8, 3, 3, 6, 6, 1, 1, 7, 7, 2, 2, 6, 6, 1, 1, 8, 8, 2, 2, 5, 5, 4, 4, 4, 1,
      1, 4, 4, 2, 2,
    ],
    [
      1, 1, 5, 5, 3, 3, 1, 1, 7, 7, 7, 4, 4, 9, 9, 5, 5, 1, 1, 4, 4, 9, 9, 3, 3,
      6, 6, 7, 7, 2, 2, 6, 6, 6, 2, 2, 2, 3, 3, 4, 4, 8, 8, 8, 3, 3, 2, 2, 1, 1,
      4, 4, 1, 1, 8, 8, 2, 2, 5, 5, 1, 1, 5, 5, 9, 9, 3, 3, 1, 1, 7, 7, 4, 4, 5,
      5, 1, 1, 4, 4, 4, 4, 3, 3, 6, 6, 7, 7, 2, 2, 6, 6, 2, 2, 2, 3, 3, 4, 4, 3,
      3, 2, 2, 1, 1, 1, 1, 8, 8, 2, 2, 5, 5, 6, 6, 2, 2, 2, 3, 3, 4, 4, 3, 3, 2,
      2, 1, 1, 1, 1, 8, 8, 2, 2, 5, 5,
    ],
    [
      1, 1, 9, 9, 2, 2, 2, 5, 5, 8, 8, 3, 3, 1, 1, 7, 7, 3, 3, 6, 6, 7, 7, 2, 2,
      6, 6, 6, 1, 1, 8, 8, 2, 2, 5, 5, 4, 4, 4, 5, 5, 1, 1, 4, 4, 3, 3, 4, 4, 3,
      3, 2, 2, 9, 9, 1, 1, 1, 1, 2, 2, 2, 5, 5, 3, 3, 1, 1, 7, 7, 3, 3, 6, 6, 7,
      7, 2, 2, 6, 6, 6, 1, 1, 8, 8, 2, 2, 5, 5, 7, 7, 4, 4, 5, 5, 1, 1, 4, 4, 3,
      3, 4, 4, 3, 3, 9, 9, 2, 2, 1, 1, 6, 6, 6, 1, 1, 8, 8, 2, 2, 5, 5, 7, 7, 4,
      4, 5, 5, 1, 1, 4, 4, 3, 3, 4, 4, 3, 3, 9, 9, 2, 2, 1, 1,
    ],
    [
      1, 1, 8, 8, 8, 2, 2, 4, 4, 3, 3, 9, 9, 9, 2, 2, 2, 5, 5, 7, 7, 2, 2, 5, 5,
      3, 3, 1, 1, 7, 7, 3, 3, 6, 6, 6, 1, 1, 4, 4, 4, 5, 5, 5, 1, 1, 4, 4, 8, 8,
      3, 3, 6, 6, 2, 2, 1, 1, 9, 9, 1, 1, 8, 8, 2, 2, 4, 4, 3, 3, 2, 2, 2, 5, 5,
      5, 7, 7, 2, 2, 9, 9, 3, 3, 1, 1, 7, 7, 3, 3, 6, 6, 1, 1, 7, 7, 5, 5, 1, 1,
      4, 4, 3, 3, 8, 8, 6, 6, 2, 2, 1, 1, 9, 9, 3, 3, 1, 1, 7, 7, 3, 3, 6, 6, 1,
      1, 7, 7, 5, 5, 1, 1, 4, 4, 3, 3, 8, 8, 6, 6, 2, 2, 1, 1,
    ],
    [
      1, 1, 5, 5, 7, 7, 3, 3, 9, 9, 9, 1, 1, 3, 3, 2, 2, 2, 7, 7, 2, 2, 6, 6, 6,
      1, 1, 8, 8, 2, 2, 4, 4, 3, 3, 4, 4, 4, 5, 5, 1, 1, 6, 6, 4, 4, 8, 8, 3, 3,
      6, 6, 2, 2, 1, 1, 8, 8, 1, 1, 5, 5, 3, 3, 9, 9, 1, 1, 7, 7, 3, 3, 2, 2, 2,
      5, 5, 1, 1, 7, 7, 7, 2, 2, 6, 6, 6, 1, 1, 8, 8, 8, 2, 2, 4, 4, 3, 3, 5, 5,
      1, 1, 4, 4, 3, 3, 9, 9, 9, 6, 6, 2, 2, 1, 1, 2, 2, 6, 6, 6, 1, 1, 8, 8, 8,
      2, 2, 4, 4, 3, 3, 5, 5, 1, 1, 4, 4, 3, 3, 9, 9, 9, 6, 6, 2, 2, 1, 1,
    ],
  ];
  private static reelsCount = 5;
  private static rowsCount = 3;
};

const start = performance.now();

Slot.spin();

const end = performance.now();
const time = start - end;

console.log('Execution time: ' + time);
