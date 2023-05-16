import { FocusMonitor } from '@angular/cdk/a11y';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, ElementRef, Inject, Input, OnDestroy, Optional, Self, ViewChild } from '@angular/core';
import { AbstractControl, AbstractControlDirective, ControlValueAccessor, FormBuilder, FormControl, FormGroup, NgControl, Validators } from '@angular/forms';
import { MAT_FORM_FIELD, MatFormField, MatFormFieldControl } from '@angular/material/form-field';
import { Subject } from 'rxjs';

/** Data structure for holding telephone number. */
export class Telephone {
  constructor(public isd: string, public telno: string) { }
}

/**
 * @description Custom `MatFormFieldControl` for Telephone number input with ISD code
 */
@Component({
  selector: 'example-tel-input',
  templateUrl: './example-tel-input.component.html',
  styleUrls: ['./example-tel-input.component.css'],
  providers: [{provide: MatFormFieldControl, useExisting: ExampleTelInput}],
  host: {
    '[class.example-floating]': 'shouldLabelFloat',
    '[id]': 'id',
  }
})
export class ExampleTelInput implements
  MatFormFieldControl<Telephone>,
  ControlValueAccessor,
  OnDestroy {
  static nextId = 0;
  @ViewChild("isd") isdInput!: HTMLInputElement;
  @ViewChild("telno") telnoInput!: HTMLInputElement;

  parts!: FormGroup<{
    isd: FormControl<string | null>,
    telno: FormControl<string | null>,
  }>;

  id: string = `example-tel-input-${ExampleTelInput.nextId++}`;
  stateChanges = new Subject<void>;
  focused: boolean = false;
  touched: boolean = false;
  onChange = (_: any) => { };
  onTouched = () => { };

  onFocusIn(_event: FocusEvent) {
    if (!this.focused) {
      this.focused = true;
      this.stateChanges.next();
    }
  }
  
  onFocusOut(event: FocusEvent) {
    if (this._elementRef.nativeElement.contains(event.relatedTarget as Element)) {
      this.focused = false;
      this.touched = true;
      this.onTouched();
      this.stateChanges.next();
    }
  }

  autoFocusNext(control: AbstractControl, nextElement?: HTMLInputElement) {
    if (!control.errors && control.value.length == 3 && nextElement) {
      this._focusMonitor.focusVia(nextElement, 'program');
    }
  }

  autoFocusPrev(control: AbstractControl, prevElement: HTMLInputElement) {
    if (control.value.length < 1) {
      this._focusMonitor.focusVia(prevElement, 'program');
    }
  }

  controlType: string | undefined = "example-tel-input";

  get empty() {
    const {
      value: { isd, telno }
    } = this.parts;
    return !isd && !telno;
  }

  get shouldLabelFloat(): boolean {
    return this.focused || !this.empty;
  }

  @Input() userAriaDescribedBy!: string;

  private _placeholder!: string;
  @Input()
  get placeholder(): string {
    return this._placeholder;
  }

  set placeholder(v: string) {
    this._placeholder = v;
    this.stateChanges.next();
  }

  private _required: boolean = false;
  @Input()
  get required(): boolean {
    return this._required;
  };

  public set required(v: BooleanInput) {
    this._required = coerceBooleanProperty(v);
    this.stateChanges.next();
  }

  private _disabled: boolean = false;

  public get disabled(): boolean {
    return this._disabled;
  }

  public set disabled(v: BooleanInput) {
    this._disabled = coerceBooleanProperty(v);
    this.stateChanges.next();
  }

  @Input()
  get value(): Telephone | null {
    if (this.parts.valid) {
      const {
        value: { isd, telno }
      } = this.parts;
      return new Telephone(isd!, telno!);
    }
    return null;
  }

  public set value(v: Telephone | null) {
    const { isd, telno } = v || new Telephone("", "");
    this.parts.setValue({ isd, telno });
    this.stateChanges.next();
  }

  get errorState(): boolean {
    return this.parts.invalid && this.touched;
  }

  constructor(
    fb: FormBuilder,
    private _focusMonitor: FocusMonitor,
    private _elementRef: ElementRef<HTMLElement>,
    @Optional() @Inject(MAT_FORM_FIELD) public _formField: MatFormField,
    @Optional() @Self() public ngControl: NgControl
  ) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }

    this.parts = fb.group({
      isd: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(3), Validators.pattern('[0-9]*')]],
      telno: ['', [Validators.required, Validators.pattern('[0-9]*')]]
    });
  }

  ngOnDestroy(): void {
    this.stateChanges.complete();
    this._focusMonitor.stopMonitoring(this._elementRef);
  }

  writeValue(tel: Telephone | null): void {
    this.value = tel;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  autofilled?: boolean | undefined = false;

  setDescribedByIds(ids: string[]): void {
    const controlElement = this._elementRef.nativeElement.querySelector('.example-tel-input-container',)!;
    controlElement.setAttribute('aria-describedby', ids.join(' '));
  }

  onContainerClick(_event: MouseEvent): void {
    if (this.parts.controls.telno.valid) {
      this._focusMonitor.focusVia(this.telnoInput, 'program');
    } else if (this.parts.controls.isd.valid) {
      this._focusMonitor.focusVia(this.telnoInput, 'program');
    } else {
      this._focusMonitor.focusVia(this.isdInput, 'program');
    }
  }

  _handleInput(control: AbstractControl, nextElement?: HTMLInputElement) {
    this.autoFocusNext(control, nextElement);
    this.onChange(this.value);
  }

}

/**
 * @description Form field with custom Telephone number input control
 */
@Component({
  selector: 'tel-form-field',
  template: `
    <div [formGroup]="form">
      <mat-form-field appearance="fill">
        <mat-label>Phone Number</mat-label>
        <example-tel-input formControlName="tel" required></example-tel-input>
        <mat-icon matSuffix>phone</mat-icon>
        <mat-hint>Include ISD code</mat-hint>
      </mat-form-field>
    </div>
  `,
  styles: [
  ]
})
export class TelFormFieldComponent {
  form: FormGroup = new FormGroup({
    tel: new FormControl(new Telephone("", "")),
  });
}
