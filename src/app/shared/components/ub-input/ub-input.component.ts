import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ub-input',
  templateUrl: './ub-input.component.html',
  styleUrls: ['./ub-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR, multi: true,
      useExisting: forwardRef(() => UbInputComponent),
    }
  ]
})
export class UbInputComponent implements OnInit, ControlValueAccessor {
  @Input() placeholder: string = "";
  @Input() type: string = "text";
  
  public inputControl: FormControl = new FormControl();

  private onChange = (value: string) => {};
  private onTouched = () => {};

  constructor() { }

  ngOnInit(): void {
  }

  doInput() {
    this.onChange(this.inputControl.value);
  }

  doBlur() {
    this.onTouched();
  }
  
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.inputControl.disable() : this.inputControl.enable();
  }

  writeValue(value: string): void {
    this.inputControl.setValue(value);
  }

}
