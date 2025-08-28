import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeroComponent } from './components/hero/hero.component';
import { StoryComponent } from './components/story/story.component';
import { PromisesComponent } from './components/promises/promises.component';
import { ApproachComponent } from './components/approach/approach.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { YoutubeComponent } from './components/youtube/youtube.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavigationComponent,
    HeroComponent,
    StoryComponent,
    PromisesComponent,
    ApproachComponent,
    PortfolioComponent,
    YoutubeComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('The Brandro');
  protected mobileMenuOpen = false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }
}
