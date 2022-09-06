import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursedCardComponent } from './cursed-card.component';

describe('CursedCardComponent', () => {
  let component: CursedCardComponent;
  let fixture: ComponentFixture<CursedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursedCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
