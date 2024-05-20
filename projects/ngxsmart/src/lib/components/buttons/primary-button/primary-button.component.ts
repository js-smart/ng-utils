import { Component, input } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { BaseButtonComponent } from '../base-button/base-button.component';
import { NgStyle } from '@angular/common';

@Component({
	selector: 'primary-button',
	standalone: true,
	imports: [MatButton, MatIcon, NgStyle],
	template: `
		<button
			mat-raised-button
			class="btn {{ classes() }}"
			(click)="onClick.emit($event)"
			(focus)="onFocus.emit($event)"
			(blur)="onBlur.emit($event)"
			[disabled]="disabled() || loading()"
			[type]="type()"
			[ngStyle]="style()"
			[attr.data-cy]="'primary-button'">
			@if (loading()) {
				<span aria-hidden="true" class="spinner-border spinner-border-sm" role="status"></span>
			}
			@if (!loading() && showIcon()) {
				<mat-icon>{{ icon() }}</mat-icon>
			}
			{{ loading() ? loadingLabel() : label() }}
		</button>
	`,
	styleUrls: ['../../../../assets/app-buttons.css'],
})
export class PrimaryButtonComponent extends BaseButtonComponent {
	override loadingLabel = input('Saving...');
	override label = input('Save');
	override icon = input('save');
	override showIcon = input(false);
	override classes = input('btn-primary primary-button');

	constructor() {
		super();
	}
}
