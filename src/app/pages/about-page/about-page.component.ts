import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  developerLink = 'https://www.linkedin.com/in/ivan-alesik-b118121b6'

  constructor() { }

  ngOnInit(): void {
  }

}
