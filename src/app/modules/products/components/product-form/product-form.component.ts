import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product';
import { ProductFormValidator } from '../../classes/product-form-validator';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  frmProduct!: FormGroup;
  id!: number;
  constructor(private frmBuild: FormBuilder, private httpService: HttpService, private route: ActivatedRoute){}
  ngOnInit(): void {
    this.frmProduct = this.frmBuild.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      desc: ["", [Validators.required, Validators.minLength(2)]],
      onhand: [0],
      lowstock: [0],
      onorder: [0],
      available: [0],
      unit: ["", [Validators.required, ProductFormValidator.unitValidation]]
    });
    this.id = this.route.snapshot.params?.["id"];
    if(this.id){
      this.httpService.getProductById(this.id).subscribe(res=>{
        this.frmProduct.patchValue(res);
      });
    }
  }
  handleSubmit(){
    const selItem: IProduct = this.frmProduct.value;
    if(this.id){
      this.httpService.editProduct(this.id, selItem).subscribe();
    } else {
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
}