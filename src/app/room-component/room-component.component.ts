import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoomServiceService } from '../service/room-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RoomRequestModel } from '../model/room-request-model';
import { Newrecordmessagemodel } from '../model/newrecordmessagemodel';
@Component({
  selector: 'app-room-component',
  templateUrl: './room-component.component.html',
  styleUrls: ['./room-component.component.css'],
})
export class RoomComponentComponent implements OnInit {
  RoomFormGroup: FormGroup = new FormGroup({});
  roomRequestModel: RoomRequestModel = new RoomRequestModel();
  newRecordMessageModel: Newrecordmessagemodel | undefined;
  constructor(
    private formBuilder: FormBuilder,
    private roomService: RoomServiceService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.RoomFormGroup = this.formBuilder.group({
      roomName: [' ', Validators.required],
      availability: ['', Validators.required],
      capacity: ['', Validators.required],
      roomType: ['', Validators.required],
    });
  }

  OnSubmit(): void {
    if (this.RoomFormGroup.valid) {
      this.roomRequestModel = this.RoomFormGroup.value;
      console.log(this.roomRequestModel.roomName);
      this.roomService.onSubmit(this.roomRequestModel).subscribe({
        next: (response: Newrecordmessagemodel) => {
          this.newRecordMessageModel = response;
          console.log(this.newRecordMessageModel.message);
          window.alert('Room added successfully!');
          this.RoomFormGroup.reset();
        },
        error: (error) => {
          console.error('Error fetching done');
        },
      });
    }
  }
}
