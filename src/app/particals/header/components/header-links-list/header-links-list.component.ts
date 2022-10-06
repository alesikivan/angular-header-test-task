import { Component, OnInit } from '@angular/core';
import { AppImages, images } from 'src/assets/images/images';

@Component({
  selector: 'header-links-list',
  templateUrl: './header-links-list.component.html',
  styleUrls: ['./header-links-list.component.scss']
})
export class HeaderLinksListComponent implements OnInit {

  public links: string[] = ['ссылки', 'контакты', 'теги', 'просьбы', 'избранное', 'посещения']

  public images: AppImages = images

  constructor() { }

  ngOnInit(): void {
  }

}
