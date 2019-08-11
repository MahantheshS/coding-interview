import { Component, OnInit } from '@angular/core';

@Component ({
    selector : 'duplicate-string',
    templateUrl : './duplicate-string.component.html',
    styleUrls : ['./duplicate-string.component.css']
})
export class DuplicateStringComponent implements OnInit{
    inputArray:string[]= ["Accenture","Coding Round","Accenture","Interview","Interview"];
    removedDuplicates : string[];

    ngOnInit(){
       this.removedDuplicates = this.removeDuplicates(this.inputArray);
    }

    removeDuplicates(duplicateArray){
      //let removedDuplicateArray = [...new Set(duplicateArray)];//Not working Set
      if(duplicateArray && duplicateArray.length > 0){
        var  removedDuplicateArray = [];
        removedDuplicateArray = duplicateArray.filter((value, index, self) => self.indexOf(value) === index); 
        console.log(removedDuplicateArray);
        return removedDuplicateArray;
      }
    }
}