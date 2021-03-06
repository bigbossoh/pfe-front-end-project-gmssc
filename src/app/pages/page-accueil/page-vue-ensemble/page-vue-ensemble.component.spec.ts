import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageVueEnsembleComponent } from './page-vue-ensemble.component';

describe('PageVueEnsembleComponent', () => {
  let component: PageVueEnsembleComponent;
  let fixture: ComponentFixture<PageVueEnsembleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageVueEnsembleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageVueEnsembleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
