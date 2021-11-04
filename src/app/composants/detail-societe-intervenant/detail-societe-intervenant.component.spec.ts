import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSocieteIntervenantComponent } from './detail-societe-intervenant.component';

describe('DetailSocieteIntervenantComponent', () => {
  let component: DetailSocieteIntervenantComponent;
  let fixture: ComponentFixture<DetailSocieteIntervenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailSocieteIntervenantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSocieteIntervenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
