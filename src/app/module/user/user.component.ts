import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {
  @ViewChild('profile') child_profile:ProfileComponent
  msg='我是父组件自己的msg'
  
  name:string[]=['jack','join','hani']
  detail:object[]=[{name:'小明',age:15},{name:'小胡',age:20}]
  constructor(public router:Router) { }
  changeSon(){
    this.child_profile.msg='我通过掌控子元素修改了frofile的msg'
  }
  getData(event){
    console.log(event)
    this.msg=event
  }
  getDataMsg(e){
    this.msg=e
  }
  doprofile(){
    this.router.navigate(['/user/profile'])
  }
  doaddress(){
    this.router.navigate(['/user/address'])

  }
  ngOnInit(): void {
  }

}
