import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroTallaComponent } from './filtro-talla.component';

describe('FiltroTallaComponent', () => {
  let component: FiltroTallaComponent;
  let fixture: ComponentFixture<FiltroTallaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroTallaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltroTallaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
