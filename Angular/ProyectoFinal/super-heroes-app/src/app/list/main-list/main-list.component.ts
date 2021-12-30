import { Component, OnInit } from '@angular/core';
import { SuperHeroeInterface, SuperHeroeResponseInterface } from '../list.model';
import { ListService } from '../list.service';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss']
})
export class MainListComponent implements OnInit {
  // declaramos la variable donde almacenamos nuestro resultado
  superheroesList: SuperHeroeInterface[] = [];

  // Llamamos a nuestro servicio o inicializamos servicio
  constructor(private listService: ListService) { }

  // Al arrancar nuestra aplicación:
  ngOnInit() {
    // Utilizamos la función getCharacters para guardar nuestros resultados:
    this.listService.getSuperheroes()
      .subscribe((data: any) => {
        const results: SuperHeroeInterface[] = data.results;
        console.log(results);
        const formattedResults = results.map(({ id, name, image }) => ({
          id,
          name,
          image,
        }));
        this.superheroesList = formattedResults;
      });
  }
}
