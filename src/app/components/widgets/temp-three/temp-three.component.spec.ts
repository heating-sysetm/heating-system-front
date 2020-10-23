import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempThreeComponent } from './temp-three.component';

describe('TempThreeComponent', () => {
  let component: TempThreeComponent;
  let fixture: ComponentFixture<TempThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
