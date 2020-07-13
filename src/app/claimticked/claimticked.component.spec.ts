import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimtickedComponent } from './claimticked.component';

describe('ClaimtickedComponent', () => {
  let component: ClaimtickedComponent;
  let fixture: ComponentFixture<ClaimtickedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimtickedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimtickedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
