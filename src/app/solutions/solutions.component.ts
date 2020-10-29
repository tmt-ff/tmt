import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-solutions",
  templateUrl: "./solutions.component.html",
  styleUrls: ["./solutions.component.scss"],
})
export class SolutionsComponent implements OnInit {
  solution: [
    " V-Pop",
    "API",
    "BOT DnA",
    "Omni-Channel Ecosystem",
    "Smart CAPEX",
    "Cyber Security ",
    "AON"
  ];
  constructor(private router: Router) {}

  ngOnInit() {}
}
