import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MyCreateResponse, SuperHeroRegister } from '../my-creates.model';
import { MyCreatesService } from '../my-creates.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-my-creates',
  templateUrl: './update-my-creates.component.html',
  styleUrls: ['./update-my-creates.component.scss']
})
export class UpdateMyCreatesComponent implements OnInit {

  public superHeroUpdateForm: FormGroup;

  public submitted: boolean = false;

  public myCreate!: SuperHeroRegister;
  public id: string | null = "";

  constructor(private myCreatesService: MyCreatesService, private formBuilder: FormBuilder, private route: ActivatedRoute, private location: Location) {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    
    this.myCreatesService.getMyCreate(this.id).subscribe((formattedResults: MyCreateResponse) => {
      this.myCreate = formattedResults.hero;

      this.superHeroUpdateForm = this.formBuilder.group({
        name: [this.myCreate.name, [Validators.required, Validators.maxLength(20)]],
        combat: [this.myCreate.combat, [Validators.required]],
        durability: [this.myCreate.durability, [Validators.required]],
        intelligence: [this.myCreate.intelligence, [Validators.required]],
        power: [this.myCreate.power, [Validators.required]],
        speed: [this.myCreate.speed, [Validators.required]],
        strength: [this.myCreate.strength, [Validators.required]],
      });
    });
  }

  ngOnInit() { }

  public onSubmit(): void {
    this.submitted = true;
    if (this.superHeroUpdateForm.valid) {
      const superHero: SuperHeroRegister = {
        name: this.superHeroUpdateForm.get('name').value,
        combat: this.superHeroUpdateForm.get('combat').value,
        durability: this.superHeroUpdateForm.get('durability').value,
        intelligence: this.superHeroUpdateForm.get('intelligence').value,
        power: this.superHeroUpdateForm.get('power').value,
        speed: this.superHeroUpdateForm.get('speed').value,
        strength: this.superHeroUpdateForm.get('strength').value,
      };
      this.superHeroUpdateForm.reset();
      this.submitted = false;
      this.myCreatesService.updateMyCreate(this.id, superHero);
      this.location.back();
    }
  }

}
