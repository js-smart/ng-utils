import { Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { BaseButtonComponent } from '../base-button/base-button.component';

@Component({
	selector: 'view-button',
	standalone: true,
	imports: [MatButton, MatIcon],
	template: `
		<button
			color="primary"
			(click)="onClick.emit($event)"
			(focus)="onFocus.emit($event)"
			(blur)="onBlur.emit($event)"
			[disabled]="disabled()"
			mat-button>
			<mat-icon>{{ icon() }}</mat-icon>
			{{ label() }}
		</button>
	`,
	styleUrls: ['../../../../assets/app-buttons.css'],
})
export class ViewButtonComponent extends BaseButtonComponent {
	override label = input('View');
	override icon = input('visibility');

	constructor() {
		super();
	}
}
