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
  }


  searchEngine(text: string): Observable<Array<Book>> {
    console.log('https://gwo.pl/booksApi/v1/search?query=' + encodeURIComponent(text))
    return this.http.get<Array<Book>>('https://gwo.pl/booksApi/v1/search?query=' + encodeURIComponent(text));

  }

}

export interface Book {
  name ?: string;
  cover ?: string;
  title ?: string;
  author ?: string;
  isbn ?: string;
  url ?: string;
}

