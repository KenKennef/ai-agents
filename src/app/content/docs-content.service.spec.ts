import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { DocsContentService } from './docs-content.service';
import { LandingPageContent, WhyAgentsPageContent } from './docs-content.models';

const isDocsRequest = (fileName: string) => (request: HttpRequest<unknown>) =>
	request.url.endsWith(`/assets/docs/${fileName}`);

describe('DocsContentService', () => {
	let service: DocsContentService;
	let httpTestingController: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [provideHttpClient(), provideHttpClientTesting()]
		});

		service = TestBed.inject(DocsContentService);
		httpTestingController = TestBed.inject(HttpTestingController);
	});

	afterEach(() => {
		httpTestingController.verify();
	});

	it('parses landing page docs into a view model', () => {
		let result: LandingPageContent | undefined;

		service.getLandingPageContent().subscribe((content) => {
			result = content;
		});

		httpTestingController.expectOne(isDocsRequest('landing-page.md')).flush(`Eyebrow: Agent-built app
BrandName: Agent Frontend Studio
Title: Byg frontend hurtigere med agents.
Intro: Landing intro.
PrimaryActionLabel: Setup
SecondaryActionLabel: Hvorfor

## Highlights
- Bygget med: Angular og Material
- Dækker: Routing og tests
`);

		expect(result).toBeDefined();
		expect(result?.eyebrow).toBe('Agent-built app');
		expect(result?.brandName).toBe('Agent Frontend Studio');
		expect(result?.actions.primaryLabel).toBe('Setup');
		expect(result?.highlights).toEqual([
			{ label: 'Bygget med', value: 'Angular og Material' },
			{ label: 'Dækker', value: 'Routing og tests' }
		]);
	});

	it('parses why-agents comparison rows from docs', () => {
		let result: WhyAgentsPageContent | undefined;

		service.getWhyAgentsPageContent().subscribe((content) => {
			result = content;
		});

		httpTestingController.expectOne(isDocsRequest('why-agents.md')).flush(`Eyebrow: Agent driven development
Title: Title
Intro: Intro
ComparisonEyebrow: Compare
ComparisonTitle: Compare title
RecommendationEyebrow: Recommendation
RecommendationText: Recommendation text

## Fordele
Description for pros.
- Pro 1

## Sammenligning
Comparison intro.
- Hastighed | Hurtig levering | Kræver præcise input
`);

		expect(result?.comparison.intro).toBe('Comparison intro.');
		expect(result?.comparison.items).toEqual([
			{
				label: 'Hastighed',
				benefit: 'Hurtig levering',
				tradeoff: 'Kræver præcise input'
			}
		]);
	});
});