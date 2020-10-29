import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  animations: [
    trigger('changeDivSize', [
      state('initial', style({
        display: 'block'
      })),
      state('final', style({
        display: 'none'
      })),
      transition('initial=>final', animate('1500ms')),
      transition('final=>initial', animate('1000ms'))
    ]),
  ]
})


export class AboutUsComponent implements OnInit {
  @ViewChild('videoPlayer', {static: false}) videoplayer: ElementRef;
  playpause;
  constructor() {}
  currentState = 'initial';

  ngOnInit() {
  }

  changeState(stateVariable) {
    this.currentState = stateVariable;
  }

  pause_playVid() {
    this.playpause = this.videoplayer.nativeElement;
    // isPaused: boolean, vid: HTMLCollectionOf<HTMLVideoElement>
    // vid[0].removeEventListener;

    if (this.playpause.paused === true) {
      console.log('play');
      this.playpause.play();
    } else {
      console.log('paused');
      this.playpause.pause();
    }
  }

  changeButtonState() {
    if (this.playpause.paused === true) {
      this.changeState('initial');
    } else {
      this.changeState('final');
    }
  }
}
