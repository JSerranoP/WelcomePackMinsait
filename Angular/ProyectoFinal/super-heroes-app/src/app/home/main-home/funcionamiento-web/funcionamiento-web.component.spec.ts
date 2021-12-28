import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionamientoWebComponent } from './funcionamiento-web.component';

describe('FuncionamientoWebComponent', () => {
  let component: FuncionamientoWebComponent;
  let fixture: ComponentFixture<FuncionamientoWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionamientoWebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionamientoWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
