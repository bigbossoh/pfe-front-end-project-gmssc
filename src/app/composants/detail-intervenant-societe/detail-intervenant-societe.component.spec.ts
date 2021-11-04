import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailIntervenantSocieteComponent } from './detail-intervenant-societe.component';

describe('DetailIntervenantSocieteComponent', () => {
  let component: DetailIntervenantSocieteComponent;
  let fixture: ComponentFixture<DetailIntervenantSocieteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailIntervenantSocieteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailIntervenantSocieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
