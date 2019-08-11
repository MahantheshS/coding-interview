import { Component,OnInit } from '@angular/core';

@Component({
  selector : 'reverse-string',
  templateUrl : './reverse-string.component.html',
  styleUrls:['./reverse-string.component.css']
})

export class ReverseStringComponent implements OnInit{
    inputString : string = 'Hello Word';
    inputArray  = ['G','O','O','D'];
    reversedString : string = "";
    ngOnInit(){
      this.reversedString = this.reverseString(this.inputString);
      this.inputArray = this.reverseStringBigOofOneSpace(this.inputArray);
    }

    //With Split and Join
    reverseString(originalString) {
      if (originalString && originalString.length > 0) {
        let reversedString = originalString.split("").reverse().join();
        console.log(reversedString);
        return reversedString;
      }
    }

    //Modifying the same array
    reverseStringBigOofOneSpace(originalInput) {
      if (originalInput && originalInput.length > 0) {
        let arrLength = originalInput.length;
        for (let i = 0; i < arrLength / 2; i++) {
          var temp = originalInput[i];
          originalInput[i] = originalInput[arrLength - 1 - i];
          originalInput[arrLength - 1 - i] = temp;
        }
        console.log(originalInput);
        return originalInput;
      }
    }
}