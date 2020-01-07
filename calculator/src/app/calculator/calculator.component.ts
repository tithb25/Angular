import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  number = '0';
  firstOperand = null;
  operator = null;
  secondNumber = false;

  constructor() { }

  ngOnInit() {
  }

  public getNumber(n: string) {
    console.log(n);
    if (this.secondNumber) {
      this.number = n;
      this.secondNumber = false;
    } else {
      this.number === '0' ? this.number = n : this.number += n;

    }
  }

  getDecimal() {
    if (!this.number.includes('.')) {
      this.number += '.';
    }
  }

  private doCalculation(op, secondOp) {
    switch (op) {
      case '+':
        return this.firstOperand += secondOp;
      case '-':
        return this.firstOperand -= secondOp;
      case '*':
        return this.firstOperand *= secondOp;
      case '/':
        return this.firstOperand /= secondOp;
      case '=':
        return secondOp;
    }
  }
  public getOperation(op: string) {
    console.log(op);

    if (this.firstOperand === null) {
      this.firstOperand = Number(this.number);

    } else if (this.operator) {
      const result = this.doCalculation(this.operator, Number(this.number))
      this.number = String(result);
      this.firstOperand = result;
    }
    this.operator = op;
    this.secondNumber = true;

    console.log(this.firstOperand);

  }

  public clear() {
    this.number = '0';
    this.firstOperand = null;
    this.operator = null;
    this.secondNumber = false;
  }
}
