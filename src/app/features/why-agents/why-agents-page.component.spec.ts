import { TestBed } from '@angular/core/testing';
import { HttpRequest } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

import { WhyAgentsPageComponent } from './why-agents-page.component';

const isDocsRequest = (fileName: string) => (request: HttpRequest<unknown>) =>
	request.url.endsWith(`/assets/docs/${fileName}`);

describe('WhyAgentsPageComponent', () => {
	it('renders why-agents content loaded from docs', () => {
		TestBed.configureTestingModule({
			imports: [WhyAgentsPageComponent],
			providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting(), provideNoopAnimations()]
		});

		const fixture = TestBed.createComponent(WhyAgentsPageComponent);
		const httpTestingController = TestBed.inject(HttpTestingController);

		fixture.detectChanges();
		httpTestingController.expectOne(isDocsRequest('why-agents.md')).flush(`Eyebrow: Why
Title: Why title
Intro: Why intro
ComparisonEyebrow: Compare
ComparisonTitle: Compare title
RecommendationEyebrow: Recommendation
RecommendationText: Recommendation text

## Fordele
Description.
- Fast start

## Sammenligning
Comparison intro.
- Hastighed | Hurtig | Tradeoff
`);
		fixture.detectChanges();

		const compiled = fixture.nativeElement as HTMLElement;
		expect(compiled.textContent).toContain('Why title');
		expect(compiled.textContent).toContain('Fast start');
		expect(compiled.textContent).toContain('Compare title');
		httpTestingController.verify();
	});
});