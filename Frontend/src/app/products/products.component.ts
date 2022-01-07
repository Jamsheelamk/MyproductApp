import { Component } from '@angular/core';
import { ProductService } from '../productservice.service';
import {AuthService} from '../auth.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'pm-products',
  templateUrl:'./products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

  products=[{
    productId :'',
    productName:'',
    productCode:'',
    releaseDate:'',
    description:'',
    price:'',
    quantity:'',
    imageUrl:''}]
  
  toggleImage(): void{
    this.showImage = !this.showImage;
  }
  constructor(private router:Router,private productService: ProductService,public _auth:AuthService){   
    
  }
  ngOnInit(): void{
    this.productService.getProducts().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
  })
  }
 
  editProduct(product:any)
  {
    localStorage.setItem("editProductId", product._id.toString());
    this.router.navigate(['update']);

  }
  deleteProduct(product:any)
  {
    this.productService.deleteProduct(product._id)
      .subscribe((data) => {
        this.products = this.products.filter(p => p !== product);
      })
  

  }
}
  