import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "app-home-our-solution",
  templateUrl: "./home-our-solution.component.html",
  styleUrls: ["./home-our-solution.component.scss"],
})
export class HomeOurSolutionComponent implements OnInit {
  cardlist = [
    {
      title: "Pale Blue Dot",
      src: "http://static.videogular.com/assets/videos/videogular.mp4",
      type: "video/mp4",
    },
    {
      title: "Big Buck Bunny",
      src:
        "http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov",
      type: "video/mp4",
    },
    {
      title: "Elephants Dream",
      src: "http://static.videogular.com/assets/videos/elephants-dream.mp4",
      type: "video/mp4",
    },
  ];

  constructor() {}

  ngOnInit() {}
}
