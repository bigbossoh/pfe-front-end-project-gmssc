import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPreventiveComponent } from './detail-preventive.component';

describe('DetailPreventiveComponent', () => {
  let component: DetailPreventiveComponent;
  let fixture: ComponentFixture<DetailPreventiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPreventiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPreventiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
