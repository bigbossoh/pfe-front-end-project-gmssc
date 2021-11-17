import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNouveauContratComponent } from './page-nouveau-contrat.component';

describe('PageNouveauContratComponent', () => {
  let component: PageNouveauContratComponent;
  let fixture: ComponentFixture<PageNouveauContratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNouveauContratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNouveauContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
