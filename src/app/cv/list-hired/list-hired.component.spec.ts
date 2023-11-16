import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHiredComponent } from './list-hired.component';

describe('ListHiredComponent', () => {
  let component: ListHiredComponent;
  let fixture: ComponentFixture<ListHiredComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListHiredComponent]
    });
    fixture = TestBed.createComponent(ListHiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
