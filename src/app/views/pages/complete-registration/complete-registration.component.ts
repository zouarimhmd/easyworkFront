import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-complete-registration',
  templateUrl: './complete-registration.component.html',
  styleUrls: ['./complete-registration.component.scss']
})
export class CompleteRegistrationComponent {

  @Output() onSubmitRegisterEvent = new EventEmitter();


  firstName: string = "";
  lastName: string = "";
  password: string = "";

  onSubmitRegister(): void {
    this.onSubmitRegisterEvent.emit({
      "firstName": this.firstName, "lastName": this.lastName, "password": this.password
    });
  }


}
