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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
