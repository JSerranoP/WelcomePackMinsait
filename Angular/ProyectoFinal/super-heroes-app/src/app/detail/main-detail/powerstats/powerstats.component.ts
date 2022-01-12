import { Component, Input, OnInit } from '@angular/core';
import { ApiSuperHeroPowerstats } from '../../detail.model';

@Component({
  selector: 'app-powerstats',
  templateUrl: './powerstats.component.html',
  styleUrls: ['./powerstats.component.scss']
})
export class PowerstatsComponent implements OnInit {

  @Input() superHeroPower!: ApiSuperHeroPowerstats;

  constructor() { }

  ngOnInit(): void {
  }

}
