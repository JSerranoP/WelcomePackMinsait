import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {

  constructor(private formService: FormService) { }

  ngOnInit(): void {
    this.formService.addSuperHero("a");
  }

}
