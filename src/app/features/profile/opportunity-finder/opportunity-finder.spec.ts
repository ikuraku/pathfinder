import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OpportunityFinder } from './opportunity-finder';

describe('OpportunityFinder', () => {
  let component: OpportunityFinder;
  let fixture: ComponentFixture<OpportunityFinder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpportunityFinder],
    }).compileComponents();

    fixture = TestBed.createComponent(OpportunityFinder);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
