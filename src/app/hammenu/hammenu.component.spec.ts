import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HammenuComponent } from './hammenu.component';

describe('HammenuComponent', () => {
  let component: HammenuComponent;
  let fixture: ComponentFixture<HammenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HammenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HammenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
