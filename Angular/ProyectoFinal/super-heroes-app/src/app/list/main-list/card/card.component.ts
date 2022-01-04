import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ApiSuperHero, SuperHero, SuperHeroResponse } from '../../list.model';
import { ListService } from '../../list.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  superheroesList: SuperHero[] = [];

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.listService.getSuperheroes().pipe(
      map((results: SuperHeroResponse) => {
        const res: ApiSuperHero[] = results.results;
        const formattedResults: SuperHero[] = res.map(({ id, name, image}) => ({
          id,
          name: name,
          image: image.url,
        }));
        return formattedResults;
      })
    ).subscribe((formattedResults) => {
        this.superheroesList = formattedResults;
        console.log(this.superheroesList);
      });
  }

}
