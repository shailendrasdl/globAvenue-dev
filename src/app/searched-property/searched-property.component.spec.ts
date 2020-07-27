import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedPropertyComponent } from './searched-property.component';

describe('SearchedPropertyComponent', () => {
  let component: SearchedPropertyComponent;
  let fixture: ComponentFixture<SearchedPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchedPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchedPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
