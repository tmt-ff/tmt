import { Component, OnInit } from "@angular/core";
import { videoStatus } from "../videoStatus";

@Component({
  selector: "app-bot-dna",
  templateUrl: "./bot-dna.component.html",
  styleUrls: ["./bot-dna.component.scss"],
})
export class BotDnaComponent implements OnInit {
  public videostatus: videoStatus[];
  constructor() {
    // console.log("videostatusvideostatusvideostatus", this.videostatus);
  }

  ngOnInit() {}
}
