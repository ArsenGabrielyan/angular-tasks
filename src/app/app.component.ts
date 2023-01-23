import { Component, OnInit } from '@angular/core';
import { AdminService } from './services/admin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private adminService: AdminService){}
  ngOnInit(): void {this.adminService.setRole("user");}
}
