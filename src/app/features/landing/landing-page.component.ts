import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

import { DocsContentService } from '../../content/docs-content.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, RouterLink],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  private readonly docsContentService = inject(DocsContentService);

  protected readonly page = toSignal(this.docsContentService.getLandingPageContent(), { initialValue: null });
}