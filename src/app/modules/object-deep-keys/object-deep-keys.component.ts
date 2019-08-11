import { Component ,OnInit} from '@angular/core';

@Component({
  selector : 'object-deep-keys',
  templateUrl : './object-deep-keys.component.html',
  styleUrls:['./object-deep-keys.component.css']
})

export class ObjectDeepKeysComponent implements OnInit{
    //Input Object to test
    objDeepKeys: any = { a: { b: 23 }, c: { d: { e: { f: { g: { h: 10 } } } } } };
    keys : any [];
    ngOnInit(){
     this.keys =  this.getKeys(this.objDeepKeys);
    }

    //Method Which Returns Keys present in Object
    getKeys(obj: any) {
        if(obj ){
        let keys = [];
        let jsonString: string = JSON.stringify(obj);
        let replacedFrontCurly = jsonString.replace(/{/g, "");
        let replacedBackCurly = replacedFrontCurly.replace(/}/g, "");
        let splitCommas = replacedBackCurly.split(',');

        splitCommas.forEach(function (element) {
            //split element with colon to get key
            var splittedArr = element.split(":");
            for (let i = 0; i < splittedArr.length - 1; i++) {
                keys.push(splittedArr[i].slice(1, -1));
            }
        })
        console.log(keys);
        return keys;
    }
    
    }
}