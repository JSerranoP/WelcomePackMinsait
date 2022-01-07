import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { SuperHero, ApiSuperHero } from '../detail.model';
import { DetailService } from '../detail.service';

@Component({
  selector: 'app-main-detail',
  templateUrl: './main-detail.component.html',
  styleUrls: ['./main-detail.component.scss']
})
export class MainDetailComponent implements OnInit {

  superHero!: ApiSuperHero;

  constructor(private detailService: DetailService) { }

  ngOnInit(): void {
    this.detailService.getSuperheroes().subscribe((formattedResults: ApiSuperHero) => {
      this.superHero = formattedResults;
      console.log(this.superHero);
    });
  }
}
