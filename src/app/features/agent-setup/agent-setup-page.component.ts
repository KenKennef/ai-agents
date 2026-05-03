import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { RouterLink } from '@angular/router';

import { DocsContentService } from '../../content/docs-content.service';

@Component({
	selector: 'app-agent-setup-page',
	standalone: true,
	imports: [MatButtonModule, MatCardModule, MatDividerModule, RouterLink],
	templateUrl: './agent-setup-page.component.html',
	styleUrl: './agent-setup-page.component.scss'
})
export class AgentSetupPageComponent {
	private readonly docsContentService = inject(DocsContentService);

	protected readonly page = toSignal(this.docsContentService.getAgentSetupPageContent(), { initialValue: null });
}