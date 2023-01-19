import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  toggled = false;
  toggleLinks = () => this.toggled = !this.toggled;
  closeToggler = () => this.toggled = false;
}
