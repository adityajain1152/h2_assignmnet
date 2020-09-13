import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  x
  constructor() { }

  ngOnInit(): void {
  }
  validateForm() {
    var x =  document.forms["register"]["fname"].value;
    var y =  document.forms["register"]["rollno"].value;
    var z =  document.forms["register"]["mobileno"].value;

    if(z.length!=10){
      alert('Mobile no. should be of 10 digits');
      return false;
    }

    if(y.length!=9){
      alert('Roll no. should be of 9 digits');
      return false;
    }
    
  }


}
