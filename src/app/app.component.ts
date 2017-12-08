import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
 // readonly ROOT_URL = 'https://jsonplaceholder.typicode.com'
  posts: any;
   readonly ROOT_URL = 'https://gwo.pl/booksApi/v1/search?query=historia'


  constructor(private http: HttpClient) { 
    this.posts = this.http.get(this.ROOT_URL );
  }

  getPosts() {
    this.posts = this.http.get(this.ROOT_URL );
  }

}
