import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageChangerMotPasseComponent } from './page-changer-mot-passe.component';

describe('PageChangerMotPasseComponent', () => {
  let component: PageChangerMotPasseComponent;
  let fixture: ComponentFixture<PageChangerMotPasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageChangerMotPasseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageChangerMotPasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
