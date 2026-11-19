import { Routes } from '@angular/router';
import { DashboardPage } from './features/dashboard/dashboard-page/dashboard-page';
import { ProfilePage } from './features/profile/profile-page/profile-page';
import { SkillsManagement } from './features/profile/skills-management/skills-management';
import { PreferencesPage } from './features/profile/preferences-page/preferences-page';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardPage },
  { path: 'profile', component: ProfilePage },
  { path: 'skills', component: SkillsManagement },
  { path: 'preferences', component: PreferencesPage },
];

