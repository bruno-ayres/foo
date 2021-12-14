import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { FormField } from '../form-field';
import { HostViewDirective } from '../host-view.directive';

export class FieldComponent {
  formField!: FormField;
  form!: FormGroup;

  get formControl(): FormControl {
    return this.form.controls[this.formField.key] as FormControl;
  }
  get errors(): ValidationErrors | null {
    return this.formControl.errors;
  }
}

@Component({
  selector: 'jhi-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: [],
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
