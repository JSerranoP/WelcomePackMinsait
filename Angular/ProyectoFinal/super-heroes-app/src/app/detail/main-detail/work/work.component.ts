import { Component, Input, OnInit } from '@angular/core';
import { ApiSuperHeroWork } from '../../detail.model';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  @Input() superHeroWork!: ApiSuperHeroWork;

  constructor() { }

  ngOnInit(): void {
  }

}
