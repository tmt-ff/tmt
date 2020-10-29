import { Component, OnInit } from "@angular/core";

export interface IMedia {
  title: string;
  src: string;
  type: string;
}
@Component({
  selector: "app-insights",
  templateUrl: "./insights.component.html",
  styleUrls: ["./insights.component.scss"],
})
export class InsightsComponent implements OnInit {
  playlist: Array<IMedia> = [
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

  currentIndex = 5;
  currentItem: IMedia = this.playlist[this.currentIndex];

  onClickPlaylistItem(item: IMedia) {
    this.currentIndex = this.currentIndex;
    this.currentItem = item;
  }

  ngOnInit() {}

  // console.log(currentItem);
}
