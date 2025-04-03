import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthLandingHomeComponent } from './unauth-landing-home.component';

describe('UnauthLandingHomeComponent', () => {
  let component: UnauthLandingHomeComponent;
  let fixture: ComponentFixture<UnauthLandingHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnauthLandingHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnauthLandingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
