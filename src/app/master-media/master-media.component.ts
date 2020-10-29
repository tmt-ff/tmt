import { Component, OnInit, Input } from "@angular/core";
import { videoStatus } from "../videoStatus";

@Component({
  selector: "app-master-media",
  templateUrl: "./master-media.component.html",
  styleUrls: ["./master-media.component.scss"],
})
export class MasterMediaComponent implements OnInit {
  public getVideoStatus: videoStatus;
  @Input() vid: HTMLCollectionOf<HTMLVideoElement>;

  constructor() {
    // this.getVideoStatus.status = true;
    // console.log(this.getVideoStatus.status, "teste stestetst");
  }

  // varvid = document.getElementsByClassName("video");
  // vid.onpause = function() {
  //   alert("The video has been paused");
  // };

  ngOnInit() {
    this.vid = document.getElementsByTagName("video");
    this.vid[0].onpause = () => {};

    this.vid[0].onplay = () => {
      console.log("onooplay");

      // this.getVideoStatus.status = true;
    };
    // //onplay
    //onplaying
    //paused: true
    //playsInline: false
  }

  payVideo() {
    // var vid = document.getElementsByTagName("video");
    // console.log(vid, "fffffffconttttfffff");
    // vid[0].addEventListener(
    //   "onclick",
    //   function () {
    //     if (vid[0].paused != true) {
    //       var x = $(this).children(".play-icon").fadeOut();
    //       console.log(vid, "playing");
    //       // this.getVideoStatus = vid[0].paused;
    //     } else {
    //       let io = $(this).children(".play-icon").fadeIn();
    //       console.log(io, "stopped");
    //       // this.getVideoStatus = vid[0].paused;
    //     }
    //   },
    //   true
    // );
    // $(".video")
    //   .parent()
    //   .click(function () {
    //     if ($(this).children(".video").get(0).onpause) {
    //       $(this).children(".video").get(0).play();
    //       $(this).children("a").fadeOut();
    //       console.log("play");
    //     } else {
    //       $(this).children(".video").get(0).onpause;
    //       $(this).children("a").fadeIn();
    //       console.log("pause");
    //     }
    //   });
  }

  pause_playVid() {
    // isPaused: boolean, vid: HTMLCollectionOf<HTMLVideoElement>
    // vid[0].removeEventListener;

    var playpause = document.getElementsByTagName("video");

    if (playpause[0].paused == true) {
      console.log("play");
      playpause[0].play();
    } else {
      console.log("paused");
      playpause[0].pause();
    }
  }
}
