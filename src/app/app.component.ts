import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  allowNewServer: boolean = false;
  serverState: string = "Server is Deactivated";
  serverName:string='';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onClickActive() {
    this.serverState = "server is Activated and server name is "+this.serverName;
  }

  onUpdateServer(event) {
    this.serverName=event.target.value;
  }
}
