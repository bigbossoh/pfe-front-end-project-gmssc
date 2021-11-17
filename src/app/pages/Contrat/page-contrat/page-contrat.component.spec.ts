import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContratComponent } from './page-contrat.component';

describe('PageContratComponent', () => {
  let component: PageContratComponent;
  let fixture: ComponentFixture<PageContratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageContratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
