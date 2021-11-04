import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNouveauBienComponent } from './page-nouveau-bien.component';

describe('PageNouveauBienComponent', () => {
  let component: PageNouveauBienComponent;
  let fixture: ComponentFixture<PageNouveauBienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNouveauBienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNouveauBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
