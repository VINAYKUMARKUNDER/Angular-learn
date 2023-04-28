import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {

  constructor(private http:HttpClient){}




  print() {
    let printContents, popupWin;
    // printContents = this.invoice.nativeElement.innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    window.document.open();
    window.document.write(`
      <html>
        <head>
          <title>Print Invoice</title>
          <style>
            @media print {
              @page { margin: 0; }
              body { margin: 1.6cm; }
            }
          </style>
        </head>
        <body onload="window.print();window.close()">
          ${printContents}
        </body>
      </html>
    `);
    window.document.close();
  }



  genrateInvoice(){

  }


}
