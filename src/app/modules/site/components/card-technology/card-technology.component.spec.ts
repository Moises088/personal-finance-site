import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTechnologyComponent } from './card-technology.component';

describe('CardTechnologyComponent', () => {
  let component: CardTechnologyComponent;
  let fixture: ComponentFixture<CardTechnologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTechnologyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
