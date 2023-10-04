import { evaluate } from 'mathjs'


export class Calculator {

  mathParams: Array<string> = ['+', '-', '*', '/', '.', '%'];
  dashboard: HTMLInputElement;

  //constructor
  constructor() {
    this.dashboard = document.getElementById("dashboard") as HTMLInputElement;
    this.setTheme('theme-one');
  }

  printNumber(mathParam: string) { this.dashboard.value += mathParam }

  exampleSolution() { this.dashboard.value = evaluate(this.dashboard.value) }

  clearPanel() { this.dashboard.value = '' }

  saveToLocal() { localStorage.setItem('result', this.dashboard.value); }

  pasteInLocal() { this.printNumber(localStorage.getItem('result')) }


  setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.querySelector('body').className = themeName;
  }

  changeTheme() {
    const theme = localStorage.getItem('theme') === 'theme-second' ? 'theme-one' : 'theme-second';
    this.setTheme(theme);
  }

  changeParams(mathParam: string): void {
    if (mathParam === '+/-') {
      this.dashboard.value = (this.dashboard.value[0] === '-') ? this.dashboard.value.slice(1) : '-' + this.dashboard.value;
    } else if (!this.mathParams.includes(this.dashboard.value[this.dashboard.value.length - 1]) && this.dashboard.value.length !== 0) {
      this.dashboard.value += mathParam;
    }
  }

}




