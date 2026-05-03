import { TestBed } from '@angular/core/testing';
import { HttpRequest } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

import { AgentSetupPageComponent } from './agent-setup-page.component';

const isDocsRequest = (fileName: string) => (request: HttpRequest<unknown>) =>
	request.url.endsWith(`/assets/docs/${fileName}`);

describe('AgentSetupPageComponent', () => {
	it('renders setup content loaded from docs', () => {
		TestBed.configureTestingModule({
			imports: [AgentSetupPageComponent],
			providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting(), provideNoopAnimations()]
		});

		const fixture = TestBed.createComponent(AgentSetupPageComponent);
		const httpTestingController = TestBed.inject(HttpTestingController);

		fixture.detectChanges();
		httpTestingController.expectOne(isDocsRequest('agent-setup.md')).flush(`Eyebrow: Setup
Title: Setup title
Intro: Setup intro
NextStepEyebrow: Next
NextStepTitle: Next title
NextStepText: Next text

## Stats
- Agenter: 1

## Hvad agenter gør
Setup description.
- Point one
`);
		fixture.detectChanges();

		const compiled = fixture.nativeElement as HTMLElement;
		expect(compiled.textContent).toContain('Setup title');
		expect(compiled.textContent).toContain('Agenter');
		expect(compiled.textContent).toContain('Point one');
		httpTestingController.verify();
	});
});