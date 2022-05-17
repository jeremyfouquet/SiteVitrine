import { Component, OnInit } from '@angular/core';
import { IntroPagedModel } from 'src/app/models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {

  siteKey: string;
  captchaIsValid:boolean = false;
  contactForm: FormGroup;

  introPageContaint: IntroPagedModel = {
    title: '_Contac_Title_',
    titleHighlight: '_Contac_Title_Highlight_',
    text: [
      '_Contac_Intro_1_',
      '_Contac_Intro_2_'
    ],
    src: 'assets/images/illustrations/IMAGE.svg',
    alt: '_Nav_4_',
    strong: [
      '_Name_',
      '_Address_'
    ],
    strongImg: 'assets/images/illustrations/maps.svg',
    strongAlt: '_Contac_Icon_'
  };

  constructor(
    private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this._initForm();
  }
  public onSubmitForm() {
    if(this.contactForm.invalid) {
      return;
    }
    console.log('todo');
  }

  private _initForm() {
    this.contactForm = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telNumber: ['', [Validators.required, Validators.pattern(/^\d{4,12}$/)]],
      objectMessage: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
}
