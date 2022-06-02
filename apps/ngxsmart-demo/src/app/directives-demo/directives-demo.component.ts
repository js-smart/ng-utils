import { Component, OnInit } from '@angular/core';
import { PreventMultipleClicksDirective, ViewButtonComponent } from '@ngxsmart/ngxsmart';

@Component({
	selector: 'ngxsmart-directives-demo',
	imports: [ViewButtonComponent, PreventMultipleClicksDirective],
	template: `
		<div class="m-5">
			<view-button class="m-3" label="Throttle Button" (throttleClick)="click()" preventMultipleClicks></view-button>
		</div>
	`,
	standalone: true,
})
export class DirectivesDemoComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}

	click() {
		console.log('Clicked');
	}
}