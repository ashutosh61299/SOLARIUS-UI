import { Component } from '@angular/core';

export enum PINNED_TYPE {
  NEW = 'New Feedback',
  LAST_DAY = 'Deadline is today',
  ACCEPTED = 'Accepted',
}

@Component({
  selector: 'app-pinned-list',
  templateUrl: './pinned-list.component.html',
  styleUrls: ['./pinned-list.component.scss'],
})
export class PinnedListComponent {
  pinnedListData = [
    {
      head: 'New gen immune',
      day: '5d',
      title: 'Multispecific liquid analysis',
      type: PINNED_TYPE.NEW,
    },
    {
      head: 'Harmony',
      day: '1h',
      title: 'Protein Characterisation during pregnancy and childhood',
      type: PINNED_TYPE.LAST_DAY,
    },
    {
      head: 'Pharmaceutical',
      day: '7h',
      title: 'Quick element dissoultion testing',
      type: PINNED_TYPE.ACCEPTED,
    },
    {
      head: 'New gen immune',
      day: '5d',
      title: 'Multispecific liquid analysis',
      type: PINNED_TYPE.NEW,
    },
  ];
}
