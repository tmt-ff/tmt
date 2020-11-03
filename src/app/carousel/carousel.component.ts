import {Component, Input, OnInit} from '@angular/core';
import {NgbCarousel, NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [NgbCarouselConfig, NgbCarousel],
})
export class CarouselComponent implements OnInit {
  private isActive = false;
  @Input() slideNumber: number;
  slideList = [{
    routerLink : '/solutions/vpop',
    name: 'V-Pop',
    image: '../../assets/images/image1.jpg',
    description: 'Some quick example text to build on the card title'
  }, {
    routerLink : '/solutions/botdna',
    name: 'BOT DnA',
    image: '../../assets/images/image3.jpg',
    description: 'Some quick example text to build on the card title'
  }, {
    routerLink : '/solutions/channel',
    name: 'Omni-Channel Ecosystem',
    image: '../../assets/images/image1.jpg',
    description: 'Some quick example text to build on the card title'
  }, {
    routerLink : '/solutions/smartcapex',
    name: 'Smart CAPEX',
    image: '../../assets/images/image3.jpg',
    description: 'Some quick example text to build on the card title'
  }, {
    routerLink : '/solutions/cyper_security',
    name: 'Cyber Security',
    image: '../../assets/images/image3.jpg',
    description: 'Some quick example text to build on the card title'
  }, {
    routerLink : '/solutions/aona',
    name: 'AONA',
    image: '../../assets/images/image1.jpg',
    description: 'Some quick example text to build on the card title'
  }, {
    routerLink : '/solutions/api',
    name: 'API',
    image: '../../assets/images/image3.jpg',
    description: 'Some quick example text to build on the card title'
  }];

  @Input() description: boolean;
  slideListMaster = [];


  constructor(config: NgbCarouselConfig, private router: Router, public location: Location, public carousel: NgbCarousel) {
    // customize default values of carousels used by this component tree
    config.interval = 4000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = false;
    console.log(config);
    this.router.events.subscribe((val) => {
        this.isActive = this.location.path().includes('solutions');
    });
    let i;
    let j;
    let temparray;
    const chunk = this.slideNumber;
    for (i = 0, j = this.slideList.length; i < j; i += chunk) {
      temparray = this.slideList.slice(i, i + chunk);
      this.slideListMaster.push(temparray);
    }
  }
  ngOnInit() {
    this.carousel.cycle();
  }
}
