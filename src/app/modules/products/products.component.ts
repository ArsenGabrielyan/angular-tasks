import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { map, Subject, takeUntil } from 'rxjs';
import { IProduct } from 'src/app/interfaces/product';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnDestroy{
  prodList: IProduct[] = [];
  destroy$ = new Subject<void>()
  constructor(private httpService: HttpService, private router: Router){
    this.httpService.showProduct().pipe(map(res=>{
      this.prodList = res;
    }),takeUntil(this.destroy$)).subscribe();
  }
  ngOnDestroy(): void {
    this.destroy$.next();
  }
  deleteProduct(id:number){
    this.httpService.deleteProduct(id).subscribe();
    this.httpService.showProduct().subscribe();
  }
}
