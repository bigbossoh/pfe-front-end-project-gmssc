import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauIntervenantComponent } from './nouveau-intervenant.component';

describe('NouveauIntervenantComponent', () => {
  let component: NouveauIntervenantComponent;
  let fixture: ComponentFixture<NouveauIntervenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveauIntervenantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauIntervenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
