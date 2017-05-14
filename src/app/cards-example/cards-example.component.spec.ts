import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsExampleComponent } from './cards-example.component';

describe('CardsExampleComponent', () => {
  let component: CardsExampleComponent;
  let fixture: ComponentFixture<CardsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
