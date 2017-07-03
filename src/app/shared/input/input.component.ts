import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';

import { NgModel, FormControlName } from '@angular/forms'



@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html',
  
})
export class InputComponent implements OnInit, AfterContentInit {

  @Input() label: string

  @Input() errorMessage: string

  input: any

  @ContentChild(NgModel) model: NgModel
  @ContentChild(FormControlName) control: FormControlName

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    this.input = this.model || this.control //tenta pegar uma das duas diretivas
    if(this.input === undefined){
      throw new Error('Esse componente precisa ser usada com diretiva ngModel ou formControlName')
    }
  }

  hasSucess():boolean{
    return this.input.valid && (this.input.dirty || this.input.touched)
  }

  hasError():boolean{
    return this.input.invalid && (this.input.dirty || this.input.touched) 
  }

}
