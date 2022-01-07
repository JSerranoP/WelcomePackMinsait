import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  id: string | null = "";

  constructor(private detailService: DetailService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });

    this.detailService.getSuperheroes(this.id).subscribe((formattedResults: ApiSuperHero) => {
      this.superHero = formattedResults;
      console.log(this.superHero);
    });
  }
}
