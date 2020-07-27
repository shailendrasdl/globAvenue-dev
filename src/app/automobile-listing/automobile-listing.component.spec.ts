import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomobileListingComponent } from './automobile-listing.component';

describe('AutomobileListingComponent', () => {
  let component: AutomobileListingComponent;
  let fixture: ComponentFixture<AutomobileListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomobileListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomobileListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
