import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';

import {
	AgentSetupPageContent,
	AgentSetupSection,
	AgentSetupStat,
	LandingPageContent,
	LandingPageHighlight,
	WhyAgentsComparison,
	WhyAgentsPageContent,
	WhyAgentsPointGroup
} from './docs-content.models';
import { AgentSetupMarkdown, LandingPageMarkdown, WhyAgentsMarkdown } from './generated-docs';

interface ParsedMarkdownSection {
	title: string;
	paragraphs: string[];
	bullets: string[];
}

@Injectable({ providedIn: 'root' })
export class DocsContentService {
	private readonly document = inject(DOCUMENT);
	private readonly http = inject(HttpClient);

	getLandingPageContent(): Observable<LandingPageContent> {
		return this.http
			.get(this.resolveDocsUrl('landing-page.md'), { responseType: 'text' })
			.pipe(
				map((content) => this.parseLandingPageContent(content)),
				catchError(() => of(this.parseLandingPageContent(LandingPageMarkdown)))
			);
	}

	getAgentSetupPageContent(): Observable<AgentSetupPageContent> {
		return this.http
			.get(this.resolveDocsUrl('agent-setup.md'), { responseType: 'text' })
			.pipe(
				map((content) => this.parseAgentSetupContent(content)),
				catchError(() => of(this.parseAgentSetupContent(AgentSetupMarkdown)))
			);
	}

	getWhyAgentsPageContent(): Observable<WhyAgentsPageContent> {
		return this.http
			.get(this.resolveDocsUrl('why-agents.md'), { responseType: 'text' })
			.pipe(
				map((content) => this.parseWhyAgentsContent(content)),
				catchError(() => of(this.parseWhyAgentsContent(WhyAgentsMarkdown)))
			);
	}

	private resolveDocsUrl(fileName: string): string {
		return new URL(`assets/docs/${fileName}`, this.document.baseURI).toString();
	}

	private parseLandingPageContent(content: string): LandingPageContent {
		const { metadata, sections } = this.parseDocument(content);
		const highlightsSection = this.getSection(sections, 'Highlights');

		return {
			eyebrow: metadata['Eyebrow'],
			brandName: metadata['BrandName'],
			title: metadata['Title'],
			intro: metadata['Intro'],
			actions: {
				primaryLabel: metadata['PrimaryActionLabel'],
				secondaryLabel: metadata['SecondaryActionLabel']
			},
			highlights: highlightsSection.bullets.map((bullet) => this.parseHighlight(bullet))
		};
	}

	private parseAgentSetupContent(content: string): AgentSetupPageContent {
		const { metadata, sections } = this.parseDocument(content);
		const statsSection = this.getSection(sections, 'Stats');

		return {
			eyebrow: metadata['Eyebrow'],
			title: metadata['Title'],
			intro: metadata['Intro'],
			stats: statsSection.bullets.map((bullet) => this.parseStat(bullet)),
			sections: sections
				.filter((section) => section.title !== 'Stats')
				.map((section) => this.parseAgentSetupSection(section)),
			nextStep: {
				eyebrow: metadata['NextStepEyebrow'],
				title: metadata['NextStepTitle'],
				text: metadata['NextStepText']
			}
		};
	}

	private parseWhyAgentsContent(content: string): WhyAgentsPageContent {
		const { metadata, sections } = this.parseDocument(content);
		const comparisonSection = this.getSection(sections, 'Sammenligning');

		return {
			eyebrow: metadata['Eyebrow'],
			title: metadata['Title'],
			intro: metadata['Intro'],
			pointGroups: sections
				.filter((section) => section.title !== 'Sammenligning')
				.map((section) => this.parseWhyAgentsPointGroup(section)),
			comparison: {
				eyebrow: metadata['ComparisonEyebrow'],
				title: metadata['ComparisonTitle'],
				intro: comparisonSection.paragraphs[0] ?? '',
				items: comparisonSection.bullets.map((bullet) => this.parseComparison(bullet))
			},
			recommendation: {
				eyebrow: metadata['RecommendationEyebrow'],
				text: metadata['RecommendationText']
			}
		};
	}

	private parseDocument(content: string): { metadata: Record<string, string>; sections: ParsedMarkdownSection[] } {
		const lines = content.split(/\r?\n/);
		const metadata: Record<string, string> = {};
		let index = 0;

		for (; index < lines.length; index += 1) {
			const line = lines[index].trim();
			if (!line) {
				index += 1;
				break;
			}

			const separatorIndex = line.indexOf(':');
			if (separatorIndex === -1) {
				break;
			}

			metadata[line.slice(0, separatorIndex).trim()] = line.slice(separatorIndex + 1).trim();
		}

		const sections: ParsedMarkdownSection[] = [];
		let currentSection: ParsedMarkdownSection | null = null;

		for (; index < lines.length; index += 1) {
			const line = lines[index].trim();
			if (!line) {
				continue;
			}

			if (line.startsWith('## ')) {
				currentSection = {
					title: line.slice(3).trim(),
					paragraphs: [],
					bullets: []
				};
				sections.push(currentSection);
				continue;
			}

			if (!currentSection) {
				continue;
			}

			if (line.startsWith('- ')) {
				currentSection.bullets.push(line.slice(2).trim());
				continue;
			}

			currentSection.paragraphs.push(line);
		}

		return { metadata, sections };
	}

	private getSection(sections: ParsedMarkdownSection[], title: string): ParsedMarkdownSection {
		const section = sections.find((item) => item.title === title);
		if (!section) {
			throw new Error(`Missing docs section: ${title}`);
		}

		return section;
	}

	private parseStat(bullet: string): AgentSetupStat {
		const [label, ...rest] = bullet.split(':');
		return {
			label: label.trim(),
			value: rest.join(':').trim()
		};
	}

	private parseHighlight(bullet: string): LandingPageHighlight {
		const [label, ...rest] = bullet.split(':');
		return {
			label: label.trim(),
			value: rest.join(':').trim()
		};
	}

	private parseAgentSetupSection(section: ParsedMarkdownSection): AgentSetupSection {
		return {
			id: this.slugify(section.title),
			eyebrow: section.title,
			title: section.title,
			description: section.paragraphs[0] ?? '',
			points: section.bullets
		};
	}

	private parseWhyAgentsPointGroup(section: ParsedMarkdownSection): WhyAgentsPointGroup {
		return {
			id: this.slugify(section.title),
			title: section.title,
			description: section.paragraphs[0] ?? '',
			points: section.bullets
		};
	}

	private parseComparison(bullet: string): WhyAgentsComparison {
		const [label = '', benefit = '', tradeoff = ''] = bullet.split('|').map((item) => item.trim());
		return {
			label,
			benefit,
			tradeoff
		};
	}

	private slugify(value: string): string {
		return value
			.toLowerCase()
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '')
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/^-+|-+$/g, '');
	}
}