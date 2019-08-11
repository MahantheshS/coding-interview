import { Component,OnInit} from '@angular/core';

@Component({
  selector : 'let-this',
  templateUrl : './let-this.component.html',
  styleUrls:['./let-this.component.css']
})

export class LetThisComponent implements OnInit{
   personName : string = '';
    person = {
      name : "Mahanthesh",
      age : 26
    };

    ngOnInit(){
      let a = 10;//block level scope available only to ngOninit()
      this.letThisDemo();
      {
        let b = 11;
      }
     // console.log(b); can't acess b here
    }

    letThisDemo(){
     // this.a  // can't access a here
     this.personName = this.person.name;//'This' referes person Object here
    }
}