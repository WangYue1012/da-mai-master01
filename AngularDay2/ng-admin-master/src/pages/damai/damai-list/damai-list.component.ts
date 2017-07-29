import {
  Component,
  OnInit
} from '@angular/core';
import {
  Meta,
  Title
} from '@angular/platform-browser';

import {DamaiService} from "../damai.service";
@Component({
  selector: 'app-damai-list',
  templateUrl: './damai-list.component.html',
  styleUrls: ['./damai-list.component.scss']
})
export class DamaiListComponent implements OnInit {
  searchText: string = "";
  searchType: string = "name";
  selectDamai:any={
    name:"未选择"
  };
  searchResult:Array<any>;
  damais:Array<any>=[];
  deleteLast() {
    this.damais.pop();
  }
  search(){
    this.searchResult = this.damais.filter(item=>{
      let result = String(item[this.searchType]).match(this.searchText)
      if(result){
        return true
      }else{
        return false
      }
    })
  }
  getUserClick(ev){
    this.selectDamai = ev
    console.log(ev);
  }
 
  sortByAsccending(type="id") {
    // 参考MDN Array操作的API文档 Array相关方法方法
    this.damais.sort((a,b)=>{
      return a[type] - b[type];
    });
  }
  sortByDesccending(type="id") {
    // 参考MDN Array操作的API文档 Array相关方法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.damais.sort((a,b)=>{
      return b[type] - a[type];
    });
  }
  sortByRadom() {
    // 参考MDN Array操作的API文档 Math相关方法
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
  this.damais.forEach((damai,index)=>{
    damai.tempIndex = Math.random();
  })
    this.sortByAsccending("tempIndex");
  }
  constructor(meta: Meta, title: Title, private damaiServ:DamaiService) {
    this.damais = this.damaiServ.getDamais()
 
    // Set SEO
    title.setTitle('My Home Page');

    meta.addTags([{
        name: 'author',
        content: 'Wendy'
      },
      {
        name: 'keywords',
        content: 'angular 4 tutorial, angular seo'
      },
      {
        name: 'description',
        content: 'This is my great description.'
      },
    ]);
    // end of SEO
  }

  ngOnInit() {}
}
