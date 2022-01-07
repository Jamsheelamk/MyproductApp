import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../productservice.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productItem= {
    productId :'',
    productName:'',
    productCode:'',
    releaseDate:'',
    description:'',
    price:'',
    quantity:'',
    imageUrl:''}
 
  constructor(private router:Router,private productService:ProductService) { }

  ngOnInit(): void {
    let productId = localStorage.getItem("editProductId");
    this.productService.getProduct(productId).subscribe((data)=>{
      this.productItem=JSON.parse(JSON.stringify(data));
  })
  }
  editProduct()
  {    
    this.productService.editProduct(this.productItem);   
    alert("Success");
    this.router.navigate(['products']);
  }

}
