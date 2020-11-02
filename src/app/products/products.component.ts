import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/product.service'

import { from } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor( public productService:ProductService) { }

  issues = [];
  pageNumber=1;
  totalRecords:String

  ngOnInit(): void {
    this.getIssues();
  }

  getIssues() {
    // const url = "https://api.github.com/repos/hadley/dplyr/issues?per_page=10&"+this.pageNumber;
    this.productService.getIssuesData().subscribe((data) => {
      console.log(data);
      // url
      this.issues = data
      this.totalRecords = data.length

    
       
    });
  }

  


}


