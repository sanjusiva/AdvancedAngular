import { CommonModule } from '@angular/common';
import { Component, Input, input, model, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form implements OnInit{
  value=input.required<number>()
  trimString=input('', { transform: this.trimStringFn })
  toTwo=input(0, { transform: this.multiplyBy2 })
  @Input({ alias: 'sliderValue' }) aliasValue:any;
  public form:any;
  public bindingValue=model(2);
  constructor(private fb: FormBuilder){}
ngOnInit(): void {
  this.form = this.fb.group(
  {
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  },
  { validators:this.passwordMatchValidator }
);
console.log("form: ",this.form);

}
public passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
  const pass = group.get('password')?.value;
  const confirm = group.get('confirmPassword')?.value;
  return pass === confirm ? null : { passwordMismatch: true };
}
public trimStringFn(value: string | undefined): string {
  return value?.trim() ?? '';
}
public multiplyBy2(value:number | undefined):number{
return value?value*2:0;
}
  public setValues(){
    this.bindingValue.update(old => old + 10);
  }
}
