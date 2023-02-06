import { Component, OnDestroy } from '@angular/core';
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
  constructor(private httpService: HttpService){
    this.httpService.showProduct().pipe(map(res=>{
      this.prodList = res;
    }),takeUntil(this.destroy$)).subscribe();
  }
  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
