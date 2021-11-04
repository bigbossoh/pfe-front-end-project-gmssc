import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBienPieceComponent } from './page-bien-piece.component';

describe('PageBienPieceComponent', () => {
  let component: PageBienPieceComponent;
  let fixture: ComponentFixture<PageBienPieceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageBienPieceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBienPieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
