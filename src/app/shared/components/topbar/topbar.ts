import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Icon } from '../icon/icon';
import { ProfileService } from '../../../core/services/profile.service';

@Component({
  selector: 'app-topbar',
  imports: [Icon],
  templateUrl: './topbar.html',
})
export class Topbar {
  private profile = toSignal(inject(ProfileService).profile$);

  userName = computed(() => this.profile()?.fullName.split(' ')[0] || 'Guest');
  photo = computed(() => this.profile()?.photo);
}
