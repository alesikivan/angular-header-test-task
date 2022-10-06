import { Component, Input, OnInit } from '@angular/core';
import { AppImages, images } from 'src/assets/images/images';

@Component({
  selector: 'header-button',
  templateUrl: './header-button.component.html',
  styleUrls: ['./header-button.component.scss']
})
export class HeaderButtonComponent implements OnInit {

  public images: AppImages = images

  @Input() image = images.search
  @Input() title = ''

  @Input() callback: Function = () => {}

  constructor() {}

  ngOnInit(): void {
  }

}
