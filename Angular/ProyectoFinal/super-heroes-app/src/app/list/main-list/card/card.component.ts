import { Component, OnInit } from '@angular/core';
import { SuperHeroeInterface, SuperHeroeResponseInterface } from '../../list.model';
import { ListService } from '../../list.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  superheroesList: SuperHeroeInterface[] = [];

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.listService.getSuperheroes()
      .subscribe((data: any) => {
        const results: SuperHeroeInterface[] = data.results;
        console.log(data.results[0].image.url);
        //console.log(results[0].image.url);

        const formattedResults = results.map(({ id, name, image }) => ({
          id,
          name,
          image,
        }));
        this.superheroesList = formattedResults;
        console.log(this.superheroesList);
      });
  }

}
