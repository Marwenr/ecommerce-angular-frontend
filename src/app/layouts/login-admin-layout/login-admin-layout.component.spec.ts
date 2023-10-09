import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAdminLayoutComponent } from './login-admin-layout.component';

describe('LoginAdminLayoutComponent', () => {
  let component: LoginAdminLayoutComponent;
  let fixture: ComponentFixture<LoginAdminLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginAdminLayoutComponent]
    });
    fixture = TestBed.createComponent(LoginAdminLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
