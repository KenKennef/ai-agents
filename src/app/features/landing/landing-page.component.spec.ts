import { TestBed } from '@angular/core/testing';
import { HttpRequest } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

import { LandingPageComponent } from './landing-page.component';

const isDocsRequest = (fileName: string) => (request: HttpRequest<unknown>) =>
	request.url.endsWith(`/assets/docs/${fileName}`);

describe('LandingPageComponent', () => {
	it('renders landing content loaded from docs', () => {
		TestBed.configureTestingModule({
			imports: [LandingPageComponent],
			providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting(), provideNoopAnimations()]
		});

		const fixture = TestBed.createComponent(LandingPageComponent);
		const httpTestingController = TestBed.inject(HttpTestingController);

		fixture.detectChanges();
		httpTestingController.expectOne(isDocsRequest('landing-page.md')).flush(`Eyebrow: Agent-built app
BrandName: Agent Frontend Studio
Title: Docs title
Intro: Docs intro
PrimaryActionLabel: Setup docs
SecondaryActionLabel: Why docs

## Highlights
- Bygget med: Angular docs
`);
		fixture.detectChanges();

		const compiled = fixture.nativeElement as HTMLElement;
		expect(compiled.textContent).toContain('Docs title');
		expect(compiled.textContent).toContain('Setup docs');
		expect(compiled.textContent).toContain('Angular docs');
		httpTestingController.verify();
	});
});