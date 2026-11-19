import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillTestDialog } from './skill-test-dialog';

describe('SkillTestDialog', () => {
  let component: SkillTestDialog;
  let fixture: ComponentFixture<SkillTestDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillTestDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillTestDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
