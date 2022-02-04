import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCorrectiveComponent } from './detail-corrective.component';

describe('DetailCorrectiveComponent', () => {
  let component: DetailCorrectiveComponent;
  let fixture: ComponentFixture<DetailCorrectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCorrectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCorrectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
