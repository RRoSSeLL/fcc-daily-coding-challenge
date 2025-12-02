export function battle(myArmy: string, opposingArmy: string): string {
  switch (true) {
    case (myArmy.length > opposingArmy.length): return "Opponent retreated";
    case (myArmy.length < opposingArmy.length): return "We retreated";
    default: {
      const valueArray = ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const letterCheck = /[a-zA-Z]/;
      const numberCheck = /\d/;
      const outcome = myArmy.split('').reduce((acc, char, index): number => {
        const opposingChar = opposingArmy.charAt(index);
        const myCharValue = letterCheck.test(char) ? valueArray.indexOf(char) :
          numberCheck.test(char) ? +char : 0;
        const oppssingCharValue = letterCheck.test(opposingChar) ? valueArray.indexOf(opposingChar) :
          numberCheck.test(opposingChar) ? +opposingChar : 0;
        switch (true) {
          case (myCharValue > oppssingCharValue): return acc + 1;
          case (myCharValue < oppssingCharValue): return acc - 1;
          default: return acc;
        }
      }, 0);
      switch (true) {
        case (outcome > 0): return 'We won';
        case (outcome < 0): return 'We lost';
        default: return 'It was a tie';
      }
    }
  }
}