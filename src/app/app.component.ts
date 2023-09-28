import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookapp';
  readonly APIURL = "http://localhost:58111/Book/";
  constructor(private http:HttpClient){

  }
  books:any = [];
  refreshData(){
    this.http.get(this.APIURL+'GetBooksWithPublisherSortFromDBList').subscribe(data=>{
      this.books = data;
    })
  }

  ngOnInit(){
    this.refreshData();
  }
}

