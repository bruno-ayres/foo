import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormField } from '../form-field';
import { HostViewDirective } from '../host-view.directive';

export class FieldComponent {
  formField!: FormField;
  form!: FormGroup;

  get formControl(): FormControl {
    return this.form.controls[this.formField.key] as FormControl;
  }
  get isValid(): boolean {
    return this.formControl.valid;
  }
  get value(): string {
    return this.formControl.value as string;
  }
}

@Component({
  selector: 'jhi-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
})
export class FormFieldComponent extends FieldComponent implements OnInit {
  @Input() form!: FormGroup;
  @Input() formField!: FormField;
  @ViewChild(HostViewDirective, { static: true }) jhiHostView!: HostViewDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    super();
  }

  ngOnInit(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.formField.component);

    const viewContainerRef = this.jhiHostView.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    const instance = componentRef.instance as FieldComponent;
    instance.form = this.form;
    instance.formField = this.formField;
  }
}
