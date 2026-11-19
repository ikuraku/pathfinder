import { Component, input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.html',
  host: { class: 'inline-flex' },
})
export class Icon {
  name = input.required<string>();
}
