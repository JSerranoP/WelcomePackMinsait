import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMyCreatesComponent } from './main-my-creates.component';

describe('MainMyCreatesComponent', () => {
  let component: MainMyCreatesComponent;
  let fixture: ComponentFixture<MainMyCreatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainMyCreatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMyCreatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
