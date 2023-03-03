import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-multiple-avatars',
  templateUrl: './multiple-avatars.component.html',
  styleUrls: ['./multiple-avatars.component.scss'],
})
export class MultipleAvatarsComponent {
  @Input() persons: string[] = [];

  get personsSub() {
    return this.persons.slice(1, Math.min(3, this.persons.length));
  }
}
