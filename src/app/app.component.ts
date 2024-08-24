import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { HeaderComponent } from './components/header/header.component';
//import { SidebarComponent } from './components/sidebar/sidebar.component';
//import { FooterComponent } from './components/footer/footer.component';
//import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], //HeaderComponent, SidebarComponent, FooterComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Emowa';
}
