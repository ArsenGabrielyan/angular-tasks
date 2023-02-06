import { Component } from '@angular/core';
import { INavItem } from 'src/app/interfaces/nav-item';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  toggled = false; 
  navItem: INavItem[] = [
    {text: "To Do List", link: '/to-do-list'},
    {text: "Weather", link: '/weather'},
    {text: "Users", link: '/registration'},
    {text: "All Products", link: '/products'},
  ]
  account = this.adminService.getRole();
  constructor(private adminService: AdminService){}
  toggleLinks = () => this.toggled = !this.toggled;
  closeToggler = () => this.toggled = false;
}
