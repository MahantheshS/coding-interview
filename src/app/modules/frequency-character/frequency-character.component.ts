import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'frequency-character',
    templateUrl: './frequency-character.component.html',
    styleUrls: ['./frequency-character.component.css']
})

export class FrequencyCharacterComponent implements OnInit {

   inputArray : string[]= ["hello world","hello world","$$$$nnn    "];
   outputMap = {};
   ngOnInit(){
    this.outputMap = this.getEachCharacterCount(this.inputArray);
   }

   getEachCharacterCount(inputStringArray : string[]){
     if(inputStringArray && inputStringArray.length > 0){
     let characterMap = {};
     inputStringArray.join("").split("").forEach(
      element => {
          if(characterMap[element]){
            characterMap[element]++;
          }
          else{
            characterMap[element] = 1;
          }
      }
     );
     console.log(characterMap);
     return characterMap;
    }
   }
}

