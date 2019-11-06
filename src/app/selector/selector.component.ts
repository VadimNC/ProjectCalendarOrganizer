import {Component} from '@angular/core';
import {DateService} from '../shared/date.service';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.less']
})
export class SelectorComponent {

  constructor(private dateService: DateService) {
  }

  public go(dir: number) {
    this.dateService.changeMonth(dir);
  }
}
