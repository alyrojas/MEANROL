import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPrivilegiosComponent } from './listar-privilegios.component';

describe('ListarPrivilegiosComponent', () => {
  let component: ListarPrivilegiosComponent;
  let fixture: ComponentFixture<ListarPrivilegiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPrivilegiosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarPrivilegiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
