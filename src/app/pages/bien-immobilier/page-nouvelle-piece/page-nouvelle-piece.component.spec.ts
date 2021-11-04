import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNouvellePieceComponent } from './page-nouvelle-piece.component';

describe('PageNouvellePieceComponent', () => {
  let component: PageNouvellePieceComponent;
  let fixture: ComponentFixture<PageNouvellePieceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNouvellePieceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNouvellePieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
