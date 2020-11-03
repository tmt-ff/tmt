import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener,
} from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('stickyMenu', { static: true }) menuElement: ElementRef;

  menuPosition: any;
  isActive: boolean;
  route: string;
  url: any;
  public href = '';
  sticky = false;
  show = false;
  constructor(private router: Router, public location: Location) {
    this.router.events.subscribe((val) => {
      // console.log("Link Link Link==========" + this.location.path(), val);
      this.url = this.location.path();
      if (this.location.path() != '') {
        this.route = this.location.path();
        if (this.route.includes('solutions')) {
          this.isActive = true;
        } else {
          this.isActive = false;
        }
        console.log('Link Link Link++++ ' + this.url);
      } else {
        this.route = 'Home';
      }
    });
  }

  ngOnInit() {}

  // @HostListener("window:scroll", ["$event"])
  // handleScroll() {
  //   this.menuPosition = this.menuElement ? this.menuElement.nativeElement.offsetTop : 0;
  //   const windowScroll = window.pageYOffset;
  //   if (windowScroll >= this.menuPosition) {
  //     this.sticky = true;
  //   } else {
  //     this.sticky = false;
  //   }
  // }
}

// console.log("RRRR", $(".smart-scroll"));

//     $("body").css("padding-top", $(".navbar").outerHeight() + "px");

//     // detect scroll top or down
//     if ($(".smart-scroll").length > 0) {
//       // check if element exists

//       console.log(last_scroll_top);
//       var last_scroll_top = 0;
//       $(window).on("scroll", function () {
//         var scroll_top = $(this).scrollTop();
//         if (scroll_top < last_scroll_top) {
//           $(".smart-scroll")
//             .removeClass("scrolled-down")
//             .addClass("scrolled-up");
//         } else {
//           $(".smart-scroll")
//             .removeClass("scrolled-up")
//             .addClass("scrolled-down");
//         }
//         last_scroll_top = scroll_top;
//       });

//       console.log("xxxxxxxx", last_scroll_top);
//     }
