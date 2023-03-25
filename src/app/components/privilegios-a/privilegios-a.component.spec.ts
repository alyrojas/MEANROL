import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivilegiosAComponent } from './privilegios-a.component';

describe('PrivilegiosAComponent', () => {
  let component: PrivilegiosAComponent;
  let fixture: ComponentFixture<PrivilegiosAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivilegiosAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivilegiosAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
