import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailChecker } from './email-checker';

describe('EmailChecker', () => {
  let component: EmailChecker;
  let fixture: ComponentFixture<EmailChecker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmailChecker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailChecker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
