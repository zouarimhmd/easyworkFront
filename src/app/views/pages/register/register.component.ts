import {Component, EventEmitter, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RoutingService} from "../../../../service/routing.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  @Output() onSubmitRegisterEvent = new EventEmitter();

  email: string = "";

  constructor(private router: Router, private route : ActivatedRoute) {
  }

  onSubmitRegister(): void {
    this.onSubmitRegisterEvent.emit({
      "email": this.email
    });
    this.router.navigate(['../complete-registration'], { relativeTo: this.route.parent });
  }
}
