import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.scss"],
})
export class ContactUsComponent implements OnInit {
  sendMessageForm = new FormGroup({
    email: new FormControl("", [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*"),
    ]),
    message: new FormControl("", Validators.required),
  });

  notsubmitted: boolean = true;
  successful_submit: boolean = false;

  constructor() {}

  ngOnInit() {}

  open(val){
    //TODO
  }

  onSubmit() {
    // Process checkout data here

    if (this.sendMessageForm.valid) {
      this.successful_submit = true;
      console.log("after var saubmitted", this.successful_submit);
      this.sendMessageForm.reset();
    } else {
      console.log("not saubmitted", this.successful_submit);

      this.notsubmitted = false;
    }
    console.log(
      "Your order has been submitted",
      this.sendMessageForm.value.email,
      this.sendMessageForm.value.message
    );
  }
}
