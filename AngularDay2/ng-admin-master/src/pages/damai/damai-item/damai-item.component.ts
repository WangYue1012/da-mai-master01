import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
import {DamaiService} from "../damai.service";

@Component({
  selector: 'app-damai-item',
  templateUrl: './damai-item.component.html',
  styleUrls: ['./damai-item.component.scss']
})
export class DamaiItemComponent implements OnInit {
  @Input() damai:any
  @Output() damaiClick = new EventEmitter<any>();
  constructor(private damaiServ:DamaiService) { 
  }
  onDamaiClick(){
    this.damaiClick.emit(this.damai)
  }
  check(){
    this.damai.check = true;
  }
  isChecked(){
    if(this.damai.check&&this.damai.check==true){
      return true
    }else{
      return false
    }
  }
  delete(){
    let id = this.damai.id
    this.damaiServ.damais.forEach((item,index,array)=>{
      if(item.id == id){
        array.splice(index,1)
      }
    })
  }
  ngOnInit() {
  }
}
