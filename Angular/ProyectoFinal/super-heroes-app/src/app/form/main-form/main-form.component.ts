import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SuperHeroRegister } from '../form.model';
import { FormService } from '../form.service';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {


  public superHeroRegisterForm: FormGroup;

  public submitted: boolean = false;

  constructor(private formService: FormService, private formBuilder: FormBuilder) {
    this.superHeroRegisterForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(20)]],
      combat: ['', [Validators.required]],
      durability: ['', [Validators.required]],
      intelligence: ['', [Validators.required]],
      power: ['', [Validators.required]],
      speed: ['', [Validators.required]],
      strength: ['', [Validators.required]],
    });
  }

  ngOnInit() { }

  public onSubmit(): void {
    this.submitted = true;
    if (this.superHeroRegisterForm.valid) {
      const superHero: SuperHeroRegister = {
        name: this.superHeroRegisterForm.get('name').value,
        combat: this.superHeroRegisterForm.get('combat').value,
        durability: this.superHeroRegisterForm.get('durability').value,
        intelligence: this.superHeroRegisterForm.get('intelligence').value,
        power: this.superHeroRegisterForm.get('power').value,
        speed: this.superHeroRegisterForm.get('speed').value,
        strength: this.superHeroRegisterForm.get('strength').value,
      };
      this.superHeroRegisterForm.reset();
      this.submitted = false;
      this.formService.addSuperHero(superHero);
      alert("SuperHeroe creado");
    }
  }
}
