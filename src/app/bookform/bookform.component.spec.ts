import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookformComponent } from './bookform.component';

describe('BookformComponent', () => {
  let component: BookformComponent;
  let fixture: ComponentFixture<BookformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookformComponent]
    });
    fixture = TestBed.createComponent(BookformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
