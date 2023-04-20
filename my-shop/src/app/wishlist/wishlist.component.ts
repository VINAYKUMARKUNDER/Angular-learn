import { Component, OnInit } from '@angular/core';
import { WishlistServiceService } from './wishlist-service.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit{

  constructor(private wishlistService: WishlistServiceService){}

  ngOnInit(): void {
    try{
      this.products = JSON.parse(localStorage.getItem('wishList') || "");
    }catch{
      localStorage.setItem('wishList', JSON.stringify(this.products));
    }
  }

  products:any=[];

  public emptyWishlists(){
    this.wishlistService.removeAllWishLists();

  }

  public removeOne(product:any){
      this.wishlistService.removeOneWishlistItem(product);
  }

}
