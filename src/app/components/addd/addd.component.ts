import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiConsumerService } from 'src/app/services/api-consumer.service';
@Component({
  selector: 'app-addd',
  templateUrl: './addd.component.html',
  styleUrls: ['./addd.component.css'],
})
export class AdddComponent implements OnInit {
  form: FormGroup;

  constructor(private api: ApiConsumerService) {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(15),
      ]),
      location: new FormControl('', [
        Validators.required,
        Validators.maxLength(15),
      ]),
    });
  }

  ngOnInit(): void {}

  formSubmitHandler(form: FormGroup) {
    if (form.invalid) {
      alert('Invalid input');
      return;
    }

    this.api
      .addNewUser(form.value.name.trim(), form.value.location.trim())
      .subscribe((data) => {
        console.log(data);
        if (data) {
          alert('data is added successfully');
        }
      });
  }
}
