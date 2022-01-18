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
  page: number = 0;

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
      });
  }

  nextPage() {
    this.page += 1;
  }

  prevPage() {
    this.page -= 1;
  }

  setPage(newPage: number) {
    this.page = newPage;
  }
}
