import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobpageComponent } from './globpage.component';

describe('GlobpageComponent', () => {
  let component: GlobpageComponent;
  let fixture: ComponentFixture<GlobpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
