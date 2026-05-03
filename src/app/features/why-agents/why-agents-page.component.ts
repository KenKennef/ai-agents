import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { RouterLink } from '@angular/router';

import { DocsContentService } from '../../content/docs-content.service';

@Component({
	selector: 'app-why-agents-page',
	standalone: true,
	imports: [MatButtonModule, MatCardModule, MatDividerModule, RouterLink],
	templateUrl: './why-agents-page.component.html',
	styleUrl: './why-agents-page.component.scss'
})
export class WhyAgentsPageComponent {
	private readonly docsContentService = inject(DocsContentService);

	protected readonly page = toSignal(this.docsContentService.getWhyAgentsPageContent(), { initialValue: null });
}