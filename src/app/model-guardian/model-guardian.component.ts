import { Component, OnInit } from "@angular/core";
import { videoStatus } from "../videoStatus";

@Component({
  selector: "app-model-guardian ",
  templateUrl: "./model-guardian.component.html",
  styleUrls: ["./model-guardian.component.scss"],
})
export class ModelGuardianComponent implements OnInit {
  public videostatus: videoStatus[];
  constructor() {
    // console.log("videostatusvideostatusvideostatus", this.videostatus);
  }

  ngOnInit() {}
}
