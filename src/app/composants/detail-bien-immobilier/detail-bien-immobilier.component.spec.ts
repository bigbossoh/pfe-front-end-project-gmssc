import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBienImmobilierComponent } from './detail-bien-immobilier.component';

describe('DetailBienImmobilierComponent', () => {
  let component: DetailBienImmobilierComponent;
  let fixture: ComponentFixture<DetailBienImmobilierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailBienImmobilierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBienImmobilierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
