import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-library',
  templateUrl: './image-library.component.html',
  styleUrls: ['./image-library.component.scss']
})
export class ImageLibraryComponent implements OnInit {
  @Input() public image : ImageData;

  constructor() { }

  ngOnInit(): void {
  }

}
