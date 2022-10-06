import { Component, OnInit } from '@angular/core';
import { AppImages, images } from 'src/assets/images/images';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isSearchActive = false

  public userProfileUrl = 'https://media.istockphoto.com/photos/portrait-of-handsome-smiling-young-man-with-crossed-arms-picture-id1200677760?k=20&m=1200677760&s=612x612&w=0&h=JCqytPoHb6bQqU9bq6gsWT2EX1G5chlW5aNK81Kh4Lg='

  public images: AppImages = images

  public searchState = 'start'

  public searchOverflow = false

  constructor() { }

  searchToggle(mode: boolean) {
    if (mode != this.isSearchActive) {
      this.searchState = this.searchState === 'start' ? 'end': 'start'

      if (!this.isSearchActive) {
        this.isSearchActive = mode
      } else {
        this.searchOverflow = false
        setTimeout(() => this.isSearchActive = mode, 400)
      }

      setTimeout(() => this.searchOverflow = mode, 400)
    }
  }

  ngOnInit(): void {
  }

}
