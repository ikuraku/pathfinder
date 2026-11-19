import { Component, computed, inject, input, output } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { UserProfile } from '../../../core/models/user-profile.model';
import { Skill } from '../../../core/models/skill.model';
import { SkillService } from '../../../core/services/skill.service';
import { PreferenceService } from '../../../core/services/preference.service';
import { Icon } from '../../../shared/components/icon/icon';
import { ProfileCard } from '../profile-card/profile-card';
import {
  CompletenessItem,
  ProfileCompleteness,
} from '../profile-completeness/profile-completeness';
import { SkillsSummary } from '../skills-summary/skills-summary';
import { SkillRadar } from '../skill-radar/skill-radar';

@Component({
  selector: 'app-profile-overview',
  imports: [Icon, ProfileCard, ProfileCompleteness, SkillsSummary, SkillRadar],
  templateUrl: './profile-overview.html',
  host: { class: 'block' },
})
export class ProfileOverview {
  private preferenceService = inject(PreferenceService);

  profile = input.required<UserProfile>();
  edit = output<void>();
  photoChange = output<string | null>();

  skills = toSignal(inject(SkillService).skills$, { initialValue: [] as Skill[] });
  preferences = toSignal(this.preferenceService.preferences$, {
    initialValue: this.preferenceService.snapshot,
  });

  items = computed<CompletenessItem[]>(() => {
    const p = this.profile();
    const prefs = this.preferences();
    return [
      {
        label: 'Personal information',
        done: !!(p.fullName && p.email && p.university && p.studyField),
      },
      { label: 'Skills added', done: this.skills().length > 0, link: '/skills' },
      {
        label: 'Preferences set',
        done: prefs.interests.length > 0 && !!prefs.location,
        link: '/preferences',
      },
      { label: 'Career goal', done: !!p.goal },
    ];
  });

  percent = computed(() => {
    const items = this.items();
    return Math.round((items.filter((i) => i.done).length / items.length) * 100);
  });
}
