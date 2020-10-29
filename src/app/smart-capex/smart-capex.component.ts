import { Component, OnInit } from '@angular/core';
declare var require: any;
const FileSaver = require('file-saver');

@Component({
  selector: 'app-smart-capex',
  templateUrl: './smart-capex.component.html',
  styleUrls: ['./smart-capex.component.scss']
})
export class SmartCapexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  downloadPdf(val, val2) {
    const pdfUrl = '../assets/Brand.pdf';
    const pdfName = 'TMT_Aona';
    FileSaver.saveAs(pdfUrl, pdfName);
  }

}
