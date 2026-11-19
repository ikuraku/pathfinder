import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileCompleteness } from './profile-completeness';

describe('ProfileCompleteness', () => {
  let component: ProfileCompleteness;
  let fixture: ComponentFixture<ProfileCompleteness>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileCompleteness],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileCompleteness);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
