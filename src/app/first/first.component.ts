import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  constructor(private _detail:DetailsService) {}
    title = "Myproject";
    value:string;

header;
getValue(){
  this.value= this._detail.getdata();
  this.header=Object.keys(this.value[0]);
}


  ngOnInit() {
    this._detail.setData();
  }

}
