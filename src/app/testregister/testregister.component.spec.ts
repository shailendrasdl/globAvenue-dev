import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestregisterComponent } from './testregister.component';

describe('TestregisterComponent', () => {
  let component: TestregisterComponent;
  let fixture: ComponentFixture<TestregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
