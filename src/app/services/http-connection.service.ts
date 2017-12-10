import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HttpConnectionService {


  posts: any;
  private newPost = new Subject<Object>();
  readonly ROOT_URL = 'https://gwo.pl/booksApi/v1/search?query=historia';

  constructor(private http: HttpClient) {
    try {
      this.http.get(this.ROOT_URL).subscribe(data => {
        this.posts = data;
        this.newPost.next(this.posts);
      });
    } catch (e) {
      console.log(e.status);
    }
  }

  getPost(): Observable<Object> {
    return this.newPost.asObservable();
  }

}
