import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { MyCreateResponse, SuperHeroRegister } from '../my-creates.model';
import { MyCreatesService } from '../my-creates.service';

@Component({
  selector: 'app-main-my-creates',
  templateUrl: './main-my-creates.component.html',
  styleUrls: ['./main-my-creates.component.scss']
})
export class MainMyCreatesComponent implements OnInit {

  myCreatesList: MyCreateResponse[] = [];

  constructor(private myCreatesService: MyCreatesService) { }

  ngOnInit(): void {
    this.myCreatesService.getMyCreates().subscribe((formattedResults: MyCreateResponse[]) => {
      this.myCreatesList = formattedResults;
    });
  }

  delete(id: string) {
    this.myCreatesService.deleteMyCreate(id);
    alert("SuperHeroe eliminado!");
    window.location.reload();
  }

  update(id: string, newHero: SuperHeroRegister) {
    this.myCreatesService.updateMyCreate(id, newHero);
  }
}
