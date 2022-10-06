import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'profile-photo',
  templateUrl: './profile-photo.component.html',
  styleUrls: ['./profile-photo.component.scss']
})
export class ProfilePhotoComponent implements OnInit {

  @Input() image = ''

  constructor() { }

  ngOnInit(): void {}

}
