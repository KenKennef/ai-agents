import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { DocsContentService } from './docs-content.service';
import { AgentSetupPageContent, LandingPageContent, WhyAgentsPageContent } from './docs-content.models';
import { AgentSetupMarkdown, LandingPageMarkdown, WhyAgentsMarkdown } from './generated-docs';

const isDocsRequest = (fileName: string) => (request: HttpRequest<unknown>) =>
	request.url.endsWith(`/assets/docs/${fileName}`);

const getMetadataValue = (markdown: string, key: string) => {
	const match = markdown.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'));
	return match?.[1] ?? '';
};

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

	it('falls back to generated landing docs when the asset request fails', () => {
		let result: LandingPageContent | undefined;

		service.getLandingPageContent().subscribe((content) => {
			result = content;
		});

		httpTestingController
			.expectOne(isDocsRequest('landing-page.md'))
			.flush('', { status: 404, statusText: 'Not Found' });

		expect(result).toBeDefined();
		expect(result?.eyebrow).toBe(getMetadataValue(LandingPageMarkdown, 'Eyebrow'));
		expect(result?.title).toBe(getMetadataValue(LandingPageMarkdown, 'Title'));
		expect(result?.actions.primaryLabel).toBe(getMetadataValue(LandingPageMarkdown, 'PrimaryActionLabel'));
		expect(result?.highlights.length).toBeGreaterThan(0);
	});

	it('falls back to generated agent setup docs when the asset request fails', () => {
		let result: AgentSetupPageContent | undefined;

		service.getAgentSetupPageContent().subscribe((content) => {
			result = content;
		});

		httpTestingController
			.expectOne(isDocsRequest('agent-setup.md'))
			.flush('', { status: 404, statusText: 'Not Found' });

		expect(result).toBeDefined();
		expect(result?.eyebrow).toBe(getMetadataValue(AgentSetupMarkdown, 'Eyebrow'));
		expect(result?.title).toBe(getMetadataValue(AgentSetupMarkdown, 'Title'));
		expect(result?.stats.length).toBeGreaterThan(0);
	});

	it('falls back to generated why-agents docs when the asset request fails', () => {
		let result: WhyAgentsPageContent | undefined;

		service.getWhyAgentsPageContent().subscribe((content) => {
			result = content;
		});

		httpTestingController
			.expectOne(isDocsRequest('why-agents.md'))
			.flush('', { status: 404, statusText: 'Not Found' });

		expect(result).toBeDefined();
		expect(result?.eyebrow).toBe(getMetadataValue(WhyAgentsMarkdown, 'Eyebrow'));
		expect(result?.title).toBe(getMetadataValue(WhyAgentsMarkdown, 'Title'));
		expect(result?.comparison.items.length).toBeGreaterThan(0);
	});
});