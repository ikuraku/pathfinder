import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillsSummary } from './skills-summary';

describe('SkillsSummary', () => {
  let component: SkillsSummary;
  let fixture: ComponentFixture<SkillsSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsSummary],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillsSummary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
