import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleSocieteComponent } from './nouvelle-societe.component';

describe('NouvelleSocieteComponent', () => {
  let component: NouvelleSocieteComponent;
  let fixture: ComponentFixture<NouvelleSocieteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleSocieteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelleSocieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
