import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-calculator-view',
  templateUrl: './calculator-view.component.html',
  styleUrls: ['./calculator-view.component.css']
})
export class CalculatorViewComponent implements OnInit {

  loadPrevData: string = "";
  operatorFound: boolean = false;
  currentExpression: string = "";
  curentUser: String = "";
  oldData = [];
  constructor(private router: Router) { }

  ngOnInit() {
    this.oldData = [
      {
        "id": "abc",
        "data": "1+2=3" + "\n" + "5/3=1.66666667" + "\n"
      },
      {
        "id": "xyz",
        "data": "1+2=3" + "\n" + "5/3=1.66666667" + "\n" + "1-9=-8'" + "\n"
      }
    ];
    this.curentUser = sessionStorage.getItem("loggedUser");
    for (var i = 0; i < this.oldData.length; i++) {
      if (this.oldData[i].id == this.curentUser) {
        this.loadPrevData = this.oldData[i].data;
        this.moveTxtAreaScroll();
      }
    }


  }

  anyBtnClicked(event) {
    var currentKeyPressed = event.target.innerHTML;
    var operatorsList = ["+", "-", "/", "*"];
    var isOperator = operatorsList.indexOf(currentKeyPressed) == -1 ? false : true;
    var currentResult = "";
    if (currentKeyPressed == "Reset") {
      this.loadPrevData = "";
      this.currentExpression = "";
      this.operatorFound = false;
    }
    else if (currentKeyPressed == "=") {
      try {
        currentResult = eval(this.currentExpression);
        if (!isFinite(parseFloat(currentResult)) || isNaN(parseFloat(currentResult))) {
          this.loadPrevData = this.loadPrevData + currentKeyPressed + "Error" + "\n";
        } else {
          var floatPointAdjust = +parseFloat(currentResult).toFixed(8);
          this.loadPrevData = this.loadPrevData + currentKeyPressed + floatPointAdjust + "\n";
        }
        this.currentExpression = "";
        this.operatorFound = false;
      }
      catch (err) {
        console.log(err);
      }

    } else if (currentKeyPressed == "BS") {
      if (this.currentExpression.length != 0) {
        this.currentExpression = this.currentExpression.slice(0, -1);
        this.loadPrevData = this.loadPrevData.slice(0, -1);
        var lastChar = this.currentExpression.substr(this.currentExpression.length - 1, 1);
        isOperator = operatorsList.indexOf(lastChar) == -1 ? false : true;
      }
    } else {
      if (!(this.operatorFound && isOperator) && (isOperator && this.currentExpression.length > 0) || !isOperator) {
        this.currentExpression = this.currentExpression + currentKeyPressed;
        this.loadPrevData = this.loadPrevData + currentKeyPressed;
        if (this.operatorFound) {
          this.operatorFound = false;
        }
      }
    }

    if (isOperator) {
      this.operatorFound = true;
    }
    this.moveTxtAreaScroll();
  }

  anyKeyPressed(event) {
    event.preventDefault();
  }
  changeScroll(event) {
    console.log(event);
  }
  moveTxtAreaScroll() {
    var textArea = document.getElementsByTagName("textarea")[0];
    textArea.scrollTop = textArea.clientHeight;
  }

  back(event) {
    this.router.navigateByUrl('/reg');
  }
}
