import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBienImmoPieceComponent } from './detail-bien-immo-piece.component';

describe('DetailBienImmoPieceComponent', () => {
  let component: DetailBienImmoPieceComponent;
  let fixture: ComponentFixture<DetailBienImmoPieceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailBienImmoPieceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBienImmoPieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
