import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { slide } from './list.animation';

/**
 * List item containing one or more lines
 */
export interface ListItem {
  lines: string[];
}

/**
 * Displays items as an unordered list
 *
 * Each item contains one or more line {@see ItemComponent}
 */
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slide],
})
export class ListComponent implements OnInit {
  @Input()
  public header: string = '';

  @Input()
  public items: ListItem[] = [];

  @Input()
  public collapsable: boolean = false;

  @Input()
  public startOpened: boolean = true;

  public get opened(): boolean {
    return this._opened;
  }

  private _opened: boolean = true;

  public ngOnInit() {
    if (this._opened !== this.startOpened) {
      this.toggle();
    }
  }

  public toggle(): void {
    if (!this.collapsable) {
      return;
    }

    this._opened = !this._opened;
  }
}
