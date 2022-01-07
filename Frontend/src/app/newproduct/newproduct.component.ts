import { Component, OnInit } from '@angular/core';
import { IProduct } from '../productmodel';
import { ProductService } from '../productservice.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewProductComponent implements OnInit {

  constructor(private productService: ProductService,private router: Router){  } 
  productItem= {
     productId :'',
     productName:'',
     productCode:'',
     releaseDate:'',
     description:'',
     price:'',
     quantity:'',
     imageUrl:''}
 // productItem: IProduct;
  ngOnInit() {
  }
  AddProduct()
  {    
    this.productService.newProduct(this.productItem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/']);
  }
}
