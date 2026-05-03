import { Routes } from '@angular/router';
import { AgentSetupPageComponent } from './features/agent-setup/agent-setup-page.component';
import { LandingPageComponent } from './features/landing/landing-page.component';
import { WhyAgentsPageComponent } from './features/why-agents/why-agents-page.component';

export const routes: Routes = [
	{ path: '', component: LandingPageComponent },
	{ path: 'agent-setup', component: AgentSetupPageComponent },
	{ path: 'why-agents', component: WhyAgentsPageComponent },
	{ path: '**', redirectTo: '' }
];
