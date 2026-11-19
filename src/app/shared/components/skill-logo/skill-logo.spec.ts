import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillLogo } from './skill-logo';

describe('SkillLogo', () => {
  let component: SkillLogo;
  let fixture: ComponentFixture<SkillLogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillLogo],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillLogo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
