import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pinned-list-item',
  templateUrl: './pinned-list-item.component.html',
  styleUrls: ['./pinned-list-item.component.scss'],
})
export class PinnedListItemComponent {
  @Input() data: any = [];
}
