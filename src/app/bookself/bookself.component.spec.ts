import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookselfComponent } from './bookself.component';

describe('BookselfComponent', () => {
  let component: BookselfComponent;
  let fixture: ComponentFixture<BookselfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookselfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookselfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should render title in a h1 tag', async(() => {
   // const fixture = TestBed.createComponent(BookselfComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div').textContent).toContain('Welcome to app!');
  }));*/

});
