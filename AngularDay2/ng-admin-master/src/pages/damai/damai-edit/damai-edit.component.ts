import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { DamaiService } from '../damai.service'

@Component({
  selector: 'app-damai-edit',
  templateUrl: '../damai-edit.component.html',
  styleUrls: ['../damai-edit.component.scss']
})
export class DamaiEditComponent implements OnInit,OnDestroy {
  damaiId:string="";
  damai:any={
    name:""
  };
  isNew:boolean = false;

  // Subscribe Declaration
  getDamaiSubscribe:any;
  
  constructor(private route: ActivatedRoute,
  private damaiServ:DamaiService,
  private location: Location) {
  }
  back(){
    this.location.back();
  }
  save(){
    if(this.isNew){
      this.damaiServ.damais.push(this.damai)
    }
    this.location.back();
  }
  ngOnInit() {
    this.getDamaiSubscribe = this.route.params.subscribe(params=>{
      this.getDamai(params['sid']).then(damai=>{
      console.log(damai)
      this.damaiId = damai.id;
      this.damai = damai
    }).catch(err=>{
      console.log(err)
    })
    })
  }
  ngOnDestroy(){
    this.getDamaiSubscribe.unsubscribe();
  }

  getDamai(id: any): Promise<any> {
    
    let p = new Promise((resolve,reject)=>{
      if(id=="new"){
        let damai = {name:""}
        this.isNew = true;
        resolve(damai)
      }
      let damai = this.damaiServ.damais.find(item=>item.id == id)
      if(damai){
        resolve(damai)
      }else{
        reject("damai not found")
      }
    })
    return p
}

}
