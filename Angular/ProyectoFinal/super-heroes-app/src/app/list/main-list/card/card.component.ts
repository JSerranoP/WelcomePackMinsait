import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { SuperHero, SuperHeroResponse } from '../../list.model';
import { ListService } from '../../list.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  superheroesList: SuperHero[] = [];
  filter: string = '';

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.listService.getSuperheroes().pipe(
      map((results: SuperHeroResponse) => results.results.map(({ id, name, image}) => ({
          id,
          name: name,
          image: image.url,
        }))
      )
    ).subscribe((formattedResults: SuperHero[]) => {
        this.superheroesList = formattedResults;
        console.log(this.superheroesList);
      });
  }

}
