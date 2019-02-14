// Angular
import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header-search',
  templateUrl: './header-search.template.html',
  styleUrls: ['./header-search.style.less'],
})
export class HeaderSearchComponent {

  @Output() onEmitSearchString = new EventEmitter<string>();

  searchString: string;

  constructor() {
    this.searchString = '';
  }

  onEnterSearchString() {
    this.onEmitSearchString.emit(this.searchString);
  }
}
