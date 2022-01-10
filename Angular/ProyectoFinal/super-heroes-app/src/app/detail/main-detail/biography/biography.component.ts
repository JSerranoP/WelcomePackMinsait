import { Component, OnInit, Input } from '@angular/core';
import { ApiSuperHeroBiography } from '../../detail.model';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.scss']
})
export class BiographyComponent implements OnInit {

  @Input() superHeroBio!: ApiSuperHeroBiography;

  constructor() { }

  ngOnInit(): void {
  }
}
