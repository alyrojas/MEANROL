import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarNoRolComponent } from './listar-no-rol.component';

describe('ListarNoRolComponent', () => {
  let component: ListarNoRolComponent;
  let fixture: ComponentFixture<ListarNoRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarNoRolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarNoRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
