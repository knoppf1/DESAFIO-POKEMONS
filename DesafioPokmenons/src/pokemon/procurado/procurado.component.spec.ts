import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcuradoComponent } from './procurado.component';

describe('ProcuradoComponent', () => {
  let component: ProcuradoComponent;
  let fixture: ComponentFixture<ProcuradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcuradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcuradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
