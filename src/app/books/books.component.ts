import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http" 
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  //url ="https://api.github.com/benoitvallon/100-best-books/blob/master/books.json";
  url="assets/Data/booksApi.json"
  booksList:any=[];
  http:HttpClient;
  constructor(http:HttpClient) { 
    this.http=http;
    //  let promise= http.get(this.url).toPromise();
    // console.log("promise",promise)
    //  promise.then(data=>{
    //    this.booksList=data;
    //  } )
   

    //  promise.then(data=>)

      // ).catch(function(){

      // })

  
  }
  getData(){
    let observable= this.http.get(this.url);
    observable.subscribe(data=>{
      this.booksList=data;
    })
  }

  
  ngOnInit() {
  }

   fakeAsync()
   {
     setTimeout(function (cb){
       alert("hello")
          cb();
     },1000)
   }


}
