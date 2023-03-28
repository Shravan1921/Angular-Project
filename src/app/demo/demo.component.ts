import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  // title="xyz";
  // name="ram";
  // disable="true"
  title='If-else condition'
  show=false  

  // count:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  // onClick(){
  //   if (this.count==0) {
  //   console.log("click event occurs...");
  //     this.count++;
  //   }
    
  //   }

}
