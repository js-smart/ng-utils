import { Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-form-value-listener',
	template: `<input type="text" (input)="onInputChange($event)" />`,
	standalone: true,
	providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => FormValueListenerComponent), multi: true }],
	imports: [ReactiveFormsModule],
})
export class FormValueListenerComponent implements ControlValueAccessor, OnInit, OnDestroy {
	private subscription: Subscription | undefined;

	ngOnInit() {}

	writeValue(value: any): void {
		// If you need to update the component's state based on the value, do it here
	}

	registerOnChange(fn: any): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: any): void {
		this.onTouched = fn;
	}

	ngOnDestroy() {
		this.subscription?.unsubscribe();
	}
	onInputChange(event: Event) {
		const target = event.target as HTMLInputElement;
		this.onChange(target.value);
	}

	private onChange: (value: any) => void = () => {};

	private onTouched: () => void = () => {};
}
