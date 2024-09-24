import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormValueListenerComponent } from '@js-smart/ng-kit';

@Component({
	standalone: true,
	selector: 'ng-kit-root',
	templateUrl: './app.component.html',
	imports: [RouterOutlet, RouterLink, ReactiveFormsModule, FormValueListenerComponent],
})
export class AppComponent {
	formGroup = new FormGroup({
		myControlName: new FormControl(),
	});

	constructor() {
		this.formGroup.get('myControlName')?.valueChanges.subscribe((value) => {
			console.log('Value changed:', value);
		});
	}
}
