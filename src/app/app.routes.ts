import { Routes } from '@angular/router';
import { LandingPage } from './features/landing/landing-page/landing-page';
import { AppShell } from './shared/components/app-shell/app-shell';
import { DashboardPage } from './features/dashboard/dashboard-page/dashboard-page';
import { ProfilePage } from './features/profile/profile-page/profile-page';
import { SkillsManagement } from './features/profile/skills-management/skills-management';
import { PreferencesPage } from './features/profile/preferences-page/preferences-page';

export const routes: Routes = [
  // Public home page (no sidebar)
  { path: '', pathMatch: 'full', component: LandingPage },

  // The application, inside the sidebar layout
  {
    path: '',
    component: AppShell,
    children: [
      { path: 'dashboard', component: DashboardPage },
      { path: 'profile', component: ProfilePage },
      { path: 'skills', component: SkillsManagement },
      { path: 'preferences', component: PreferencesPage },
    ],
  },

  { path: '**', redirectTo: '' },
];
