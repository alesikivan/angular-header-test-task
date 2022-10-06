import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

const animations = [
  trigger('block', [
    state('start', style({ left: '1000px' })),
    state('end', style({ left: '0' })),
    transition('start => end', animate(400)),
    transition('end => start', animate(400)),
  ])
]

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: animations
})
export class SearchComponent implements OnInit {

  public searchValue = ''

  @Input() isActive = false

  @Input() searchState = 'start'

  public isFocus = false

  constructor() { }

  setSearchValue(event: Event) {
    this.searchValue = (event.target as HTMLInputElement).value
  }

  clearSearchValue() {
    this.searchValue = ''
  }

  ngOnInit(): void {
  }

}
