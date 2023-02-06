import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IProduct } from 'src/app/interfaces/product';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  frmProduct!: FormGroup;
  constructor(private frmBuild: FormBuilder, private httpService: HttpService){}
  ngOnInit(): void {
    this.frmProduct = this.frmBuild.group({
      name: [""],
      desc: [""],
      onhand: [0],
      lowstock: [0],
      onorder: [0],
      available: [0],
      unit: [""]
    });
  }
  handleSubmit(){
    const selItem: IProduct = this.frmProduct.value;
    this.httpService.addProduct(selItem).subscribe();
    this.frmProduct.reset({
      name: "",
      desc: "",
      onhand: 0,
      lowstock: 0,
      onorder: 0,
      available: 0,
      unit: ""
    });
  }
}