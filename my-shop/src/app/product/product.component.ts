import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart/cart-service.service';
import { RouterLink } from '@angular/router';
import { WishlistServiceService } from '../wishlist/wishlist-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  ngOnInit(): void {
    try {
      this.wishListProduct = JSON.parse(localStorage.getItem('wishList') || "");
    } catch {
      localStorage.setItem('wishList', JSON.stringify(this.wishListProduct));
    }

    try {

      this.status = JSON.parse(localStorage.getItem('login') || "")
    }
    catch { localStorage.setItem('login', JSON.stringify(this.status)); }

  }

  wishListProduct: any = [];

  constructor(private cartService: CartServiceService, private wishListService: WishlistServiceService) { }

  products = [
    {
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", "category": "men's clothing", "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", "rating": { "rate": 3.9, "count": 120 }
    },
    {
      "id": 2, "title": "Mens Casual Premium Slim Fit T-Shirts ", "price": 22.3, "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      "rating": { "rate": 4.1, "count": 259 }
    },
    {
      "id": 3,
      "title": "Mens Cotton Jacket",
      "price": 55.99,
      "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.", "category": "men's clothing", "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg", "rating": { "rate": 4.7, "count": 500 }
    },
    {
      "id": 4,
      "title": "Mens Casual Slim Fit",
      "price": 15.99,
      "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.", "category": "men's clothing", "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      "rating": { "rate": 2.1, "count": 430 }
    },
    {
      "id": 5,
      "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      "price": 695,
      "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      "category": "jewelery", "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      "rating": { "rate": 4.6, "count": 400 }
    },
    {
      "id": 6,
      "title": "Solid Gold Petite Micropave ",
      "price": 168,
      "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.", "category": "jewelery", "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg", "rating": { "rate": 3.9, "count": 70 }
    },
    {
      "id": 7, "title": "White Gold Plated Princess",
      "price": 9.99,
      "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      "category": "jewelery",
      "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      "rating": { "rate": 3, "count": 400 }
    },
    {
      "id": 8,
      "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
      "price": 10.99,
      "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      "category": "jewelery",
      "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      "rating": { "rate": 1.9, "count": 100 }
    },
    {
      "id": 9,
      "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
      "price": 64,
      "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system", "category": "electronics", "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg", "rating": { "rate": 3.3, "count": 203 }
    }, { "id": 10, "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s", "price": 109, "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)", "category": "electronics", "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg", "rating": { "rate": 2.9, "count": 470 } }, { "id": 11, "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5", "price": 109, "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.", "category": "electronics", "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg", "rating": { "rate": 4.8, "count": 319 } }, { "id": 12, "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive", "price": 114, "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty", "category": "electronics", "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg", "rating": { "rate": 4.8, "count": 400 } }, { "id": 13, "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin", "price": 599, "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz", "category": "electronics", "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg", "rating": { "rate": 2.9, "count": 250 } }, { "id": 14, "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ", "price": 999.99, "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag", "category": "electronics", "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg", "rating": { "rate": 2.2, "count": 140 } }, { "id": 15, "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats", "price": 56.99, "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates", "category": "women's clothing", "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg", "rating": { "rate": 2.6, "count": 235 } }, { "id": 16, "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket", "price": 29.95, "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON", "category": "women's clothing", "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg", "rating": { "rate": 2.9, "count": 340 } }, { "id": 17, "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats", "price": 39.99, "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.", "category": "women's clothing", "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg", "rating": { "rate": 3.8, "count": 679 } }, { "id": 18, "title": "MBJ Women's Solid Short Sleeve Boat Neck V ", "price": 9.85, "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem", "category": "women's clothing", "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg", "rating": { "rate": 4.7, "count": 130 } }, { "id": 19, "title": "Opna Women's Short Sleeve Moisture", "price": 7.95, "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort", "category": "women's clothing", "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg", "rating": { "rate": 4.5, "count": 146 } }, { "id": 20, "title": "DANVOUY Womens T Shirt Casual Cotton Short", "price": 12.99, "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.", "category": "women's clothing", "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg", "rating": { "rate": 3.6, "count": 145 } }]




  logJSONData = async (): Promise<void> => {
    const response = await fetch("https://fakestoreapi.com/products/");
    const jsonData = await response.json();
    console.log(jsonData);
  }


  getTotalProduct() { return this.products.length }

  getTotalEloctronic() { return this.products.filter(pro => pro.category === 'electronics').length }

  getTotalMensProduct() { return this.products.filter(pro => pro.category === "men's clothing").length }

  getTotalWomensProduct() { return this.products.filter(pro => pro.category === "women's clothing").length }
  getTotalWomensJewelery() { return this.products.filter(pro => pro.category === "jewelery").length }


  selectedRadioValue: string = 'All';
  searchText: string = '';

  getFilterAccordingRadioButton(data: string) {
    this.selectedRadioValue = data;
    // console.log(this.selectedRadioValue)
  }


  onSearchText(searchValue: string) {
    this.searchText = searchValue;
    // console.log(this.searchText)
  }

  status: Boolean = false;

  addToCart(product: any) {


    if (this.status) {
      let res = this.cartService.addToCart(product);
      if (res) alert("product addedd successfully!!")
      else alert("this product is already addedd!!");
    } else {
      alert("Login First")
      location.href = "/login"

    }

  }


  view(product: object) {
    localStorage.setItem("view", JSON.stringify(product));
  }


  public wishListStatus(product: any) {


    for (let i = 0; i < this.wishListProduct.length; i++)
      if (this.wishListProduct[i].id === product.id) {
        return 'data:image/png;base64,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'
      }
    return 'data:image/png;base64,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';


  }

  public addWishList(product: any) {
    let res = this.wishListService.addProduct(product);
    // if(res)alert('wishlist...')
    // else alert('Unwishlist...')

    location.reload();
  }

}
