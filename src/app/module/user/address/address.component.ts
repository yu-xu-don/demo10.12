import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.less']
})
export class AddressComponent implements OnInit {
  msg='我是address的msg'
  @Output() other=new EventEmitter()
  constructor() { }
  toparent(){
    this.other.emit(this.msg)
  }
  ngOnInit(): void {
  }

}
