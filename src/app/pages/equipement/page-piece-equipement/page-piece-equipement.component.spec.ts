import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePieceEquipementComponent } from './page-piece-equipement.component';

describe('PagePieceEquipementComponent', () => {
  let component: PagePieceEquipementComponent;
  let fixture: ComponentFixture<PagePieceEquipementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePieceEquipementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePieceEquipementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
