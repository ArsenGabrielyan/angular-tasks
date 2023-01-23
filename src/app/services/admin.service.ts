import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  getRole(){return localStorage.getItem("user-roles") as string;}
  setRole(type: string){return localStorage.setItem("user-roles", type);}
}