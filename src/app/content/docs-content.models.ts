export interface LandingPageHighlight {
	label: string;
	value: string;
}

export interface LandingPageContent {
	eyebrow: string;
	brandName: string;
	title: string;
	intro: string;
	actions: {
		primaryLabel: string;
		secondaryLabel: string;
	};
	highlights: LandingPageHighlight[];
}

export interface AgentSetupStat {
	label: string;
	value: string;
}

export interface AgentSetupSection {
	id: string;
	eyebrow: string;
	title: string;
	description: string;
	points: string[];
}

export interface AgentSetupPageContent {
	eyebrow: string;
	title: string;
	intro: string;
	stats: AgentSetupStat[];
	sections: AgentSetupSection[];
	nextStep: {
		eyebrow: string;
		title: string;
		text: string;
	};
}

export interface WhyAgentsPointGroup {
	id: string;
	title: string;
	description: string;
	points: string[];
}

export interface WhyAgentsComparison {
	label: string;
	benefit: string;
	tradeoff: string;
}

export interface WhyAgentsPageContent {
	eyebrow: string;
	title: string;
	intro: string;
	pointGroups: WhyAgentsPointGroup[];
	comparison: {
		eyebrow: string;
		title: string;
		intro: string;
		items: WhyAgentsComparison[];
	};
	recommendation: {
		eyebrow: string;
		text: string;
	};
}