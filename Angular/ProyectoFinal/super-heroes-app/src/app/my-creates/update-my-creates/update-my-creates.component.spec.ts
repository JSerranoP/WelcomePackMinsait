import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMyCreatesComponent } from './update-my-creates.component';

describe('UpdateMyCreatesComponent', () => {
  let component: UpdateMyCreatesComponent;
  let fixture: ComponentFixture<UpdateMyCreatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMyCreatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMyCreatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
