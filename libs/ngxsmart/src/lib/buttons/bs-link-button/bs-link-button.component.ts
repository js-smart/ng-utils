import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
	selector: 'bs-link-button',
	standalone: true,
	imports: [CommonModule, MatButtonModule, MatIconModule],
	template: `
		<a class="btn btn-link" mat-button>
			<mat-icon>{{ icon }}</mat-icon>
			{{ label }}
		</a>
	`,
	styles: [],
})
export class BsLinkButtonComponent {
	/**
	 * Icon to display
	 */
	@Input() icon = 'search';

	/**
	 * If set, shows the label
	 */
	@Input() label = 'Edit';
}
