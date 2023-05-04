import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroPrecioComponent } from './filtro-precio.component';

describe('FiltroPrecioComponent', () => {
  let component: FiltroPrecioComponent;
  let fixture: ComponentFixture<FiltroPrecioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroPrecioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltroPrecioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
