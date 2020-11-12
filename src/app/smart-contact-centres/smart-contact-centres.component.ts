import { Component, OnInit } from '@angular/core';
declare var require: any;
const FileSaver = require('file-saver');

@Component({
  selector: 'app-Smart-Contact-Centres',
  templateUrl: './Smart-Contact-Centres.component.html',
  styleUrls: ['./Smart-Contact-Centres.component.scss']
})
export class SmartContactCentresComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  downloadPdf(val, val2) {
    const pdfUrl = '../assets/Brand.pdf';
    const pdfName = 'TMT_Aona';
    FileSaver.saveAs(pdfUrl, pdfName);
  }

}
