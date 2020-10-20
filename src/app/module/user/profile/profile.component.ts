import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {
  constructor(public http:HttpClient) { }
@Input() name:any;
@Input() detail:any;
@Output() other=new EventEmitter()
  value='123123'
  num=1
  msg="我是子组件的消息"
  arr:number[]=[1,2,4,5,6]
  getres(){
    console.log(this.msg)
  }
  self(){
    this.other.emit(this.msg)
  }
  doAdd(){
    this.num++
  }
  ngOnInit(): void {
    this.http.get('https://api.github.com/search/repositories?q=angular').subscribe((data:Res)=>console.log(data))
  }


}










interface result{

}
interface Res{
  incomplete_results:boolean,
  total_count:number,
  item:object[]
}