import { Component, OnInit } from '@angular/core';
import { SuperHero, SuperHeroResponse } from '../list.model';
import { ListService } from '../list.service';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss']
})
export class MainListComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
}
