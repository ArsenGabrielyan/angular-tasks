import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Subject, takeUntil } from 'rxjs';
import { IProduct } from 'src/app/interfaces/product';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit,OnDestroy{
  prodList: IProduct[] = [];
  destroy$ = new Subject<void>();
  searchTerm = "";
  constructor(private httpService: HttpService){}
  ngOnInit(): void {
    this.httpService.showProduct().pipe(map(res=>{
      this.prodList = res;
    }),takeUntil(this.destroy$)).subscribe();
  }
  ngOnDestroy(): void {
    this.destroy$.next();
  }
  deleteProduct(id:number){
    this.httpService.deleteProduct(id).subscribe();
    window.location.reload();
  }
}
