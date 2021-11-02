import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSocieteComponent } from './page-societe.component';

describe('PageSocieteComponent', () => {
  let component: PageSocieteComponent;
  let fixture: ComponentFixture<PageSocieteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSocieteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSocieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
