import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ListItem } from '../list.component';

/**
 * Display ListItem lines as:
 *
 * line 1
 * line 2
 */
@Component({
  selector: '[appItem]',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemComponent {
  @Input()
  public item: ListItem | null = null;
}
