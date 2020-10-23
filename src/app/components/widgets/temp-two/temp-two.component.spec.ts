import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempTwoComponent } from './temp-two.component';

describe('TempTwoComponent', () => {
  let component: TempTwoComponent;
  let fixture: ComponentFixture<TempTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
