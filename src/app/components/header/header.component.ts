import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  toggled = false; 
  account = this.adminService.getRole();
  constructor(private adminService: AdminService){}
  toggleLinks = () => this.toggled = !this.toggled;
  closeToggler = () => this.toggled = false;
}
