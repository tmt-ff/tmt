import { Component, OnInit, HostListener } from '@angular/core';

declare var require: any;
const FileSaver = require('file-saver');

@Component({
  selector: 'app-aona',
  templateUrl: './aona.component.html',
  styleUrls: ['./aona.component.scss'],
})
export class AonaComponent implements OnInit {
  constructor() {}

  downloadPdf(val1, val2) {
    const pdfUrl = '../assets/Brand.pdf';
    const pdfName = 'TMT_Aona';
    FileSaver.saveAs(pdfUrl, pdfName);
  }

  onScroll(event: any) {
    // visible height + pixel scrolled >= total height
    if (
      event.target.offsetHeight + event.target.scrollTop >=
      event.target.scrollHeight
    ) {
      console.log('End');
    }
  }
  ngOnInit() {}

  goTop() {}
}
