import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomepageComponent } from './COMPONENTS/homepage/homepage.component';
import { NavbarComponent } from './COMPONENTS/navbar/navbar.component';
import { FooterComponent } from './COMPONENTS/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HomepageComponent,
    NavbarComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'PokedexLV';
}
