import { Component, Input, OnInit } from '@angular/core';
import { ApiSuperHeroImage } from '../../detail.model';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  @Input() superHeroImg!: ApiSuperHeroImage;

  constructor() { }

  ngOnInit(): void {
  }

}
