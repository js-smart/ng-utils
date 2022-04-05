import { Component, NgModule, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
	EditSolidSvgComponentModule
} from "../../../../../libs/ngxsmart/src/lib/svg-icons/edit-solid-svg/edit-solid-svg.component";
import { MatButtonModule } from "@angular/material/button";
import {
	EditSvgIconButtonComponentModule
} from "@ngxsmart/ngxsmart";

@Component({
	selector: "ngxsmart-edit-svg-icon-demo",
	template: `
		<edit-svg-icon-button class="m-5"></edit-svg-icon-button>
	`,
	styles: []
})
export class EditSvgIconDemoComponent implements OnInit {
	constructor() {
	}

	ngOnInit(): void {
	}
}

@NgModule({
	imports: [CommonModule, EditSolidSvgComponentModule, MatButtonModule, EditSvgIconButtonComponentModule],
	declarations: [EditSvgIconDemoComponent],
	exports: [EditSvgIconDemoComponent]
})
export class EditSvgIconDemoComponentModule {
}