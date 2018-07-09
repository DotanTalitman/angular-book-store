import { Component, OnInit } from '@angular/core';
import {Prodcut} from "../Shared/Prodcut"

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  isActive:boolean;

  products:Array<Prodcut>= [];

  constructor() {
    this.products.push(new Prodcut("Book1","this is book1","https://cdn.aarp.net/content/dam/aarp/money/budgeting_savings/2016/04/1140-yeager-sell-your-used-books.imgcache.rev6feda141288df73e8fd100822bb375ea.jpg",2000))
    this.products.push(new Prodcut("Book2","this is book2","https://cdn.aarp.net/content/dam/aarp/money/budgeting_savings/2016/04/1140-yeager-sell-your-used-books.imgcache.rev6feda141288df73e8fd100822bb375ea.jpg",1000))
    this.products.push(new Prodcut("Book3","this is book3","https://cdn.aarp.net/content/dam/aarp/money/budgeting_savings/2016/04/1140-yeager-sell-your-used-books.imgcache.rev6feda141288df73e8fd100822bb375ea.jpg",1500))
   }


  ngOnInit() {
  }

}
