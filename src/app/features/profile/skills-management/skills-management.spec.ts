import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillsManagement } from './skills-management';

describe('SkillsManagement', () => {
  let component: SkillsManagement;
  let fixture: ComponentFixture<SkillsManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsManagement],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillsManagement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
