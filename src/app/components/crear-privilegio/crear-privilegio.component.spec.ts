import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPrivilegioComponent } from './crear-privilegio.component';

describe('CrearPrivilegioComponent', () => {
  let component: CrearPrivilegioComponent;
  let fixture: ComponentFixture<CrearPrivilegioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPrivilegioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearPrivilegioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
