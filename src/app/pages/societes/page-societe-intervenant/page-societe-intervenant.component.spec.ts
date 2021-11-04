import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSocieteIntervenantComponent } from './page-societe-intervenant.component';

describe('PageSocieteIntervenantComponent', () => {
  let component: PageSocieteIntervenantComponent;
  let fixture: ComponentFixture<PageSocieteIntervenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSocieteIntervenantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSocieteIntervenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
