import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCvComponent } from './autocomplete.component';

describe('SearchCvComponent', () => {
  let component: SearchCvComponent;
  let fixture: ComponentFixture<SearchCvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchCvComponent]
    });
    fixture = TestBed.createComponent(SearchCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
