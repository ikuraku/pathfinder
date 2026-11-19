import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, Icon],
  templateUrl: './sidebar.html',
})
export class Sidebar {
  // route = null : module développé par un autre membre de l'équipe
  menu = [
    { label: 'Dashboard', icon: 'home', route: '/dashboard' },
    { label: 'My Profile', icon: 'user', route: '/profile' },
    { label: 'Skills', icon: 'grid', route: '/skills' },
    { label: 'Preferences', icon: 'settings', route: '/preferences' },
    { label: 'Career Explorer', icon: 'search', route: null },
    { label: 'My Roadmap', icon: 'map', route: null },
    { label: 'Skill Gap Analyzer', icon: 'chart', route: null },
    { label: 'Progress Tracker', icon: 'target', route: null },
    { label: 'Settings', icon: 'settings' },

  ];

  bottomMenu = [
    { label: 'Help & Support', icon: 'help' },
  ];
}
