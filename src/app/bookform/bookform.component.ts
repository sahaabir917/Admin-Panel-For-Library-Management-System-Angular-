import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookserviceService } from '../service/bookservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RoomRequestModel } from '../model/room-request-model';
import { Newrecordmessagemodel } from '../model/newrecordmessagemodel';
import { BookRequestModel } from '../model/book-request-model';

@Component({
  selector: 'app-bookform',
  templateUrl: './bookform.component.html',
  styleUrls: ['./bookform.component.css'],
})
export class BookformComponent implements OnInit {
  BookFormGroup: FormGroup = new FormGroup({});
  bookRequestModel: BookRequestModel = new BookRequestModel();
  newRecordMessageModel: Newrecordmessagemodel | undefined;
  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookserviceService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.BookFormGroup = this.formBuilder.group({
      available_copy: [' ', Validators.required],
      total_copies: ['', Validators.required],
      author: ['', Validators.required],
      publisher: ['', Validators.required],
      title: ['', Validators.required],
      isbn: ['', Validators.required],
      category: ['', Validators.required],
    });
  }

  OnSubmit(): void {
    if (this.BookFormGroup.valid) {
      this.bookRequestModel = this.BookFormGroup.value;
      console.log(this.bookRequestModel);
      this.bookService.addNewBook(this.bookRequestModel).subscribe({
        next: (response: Newrecordmessagemodel) => {
          this.newRecordMessageModel = response;
          console.log(this.newRecordMessageModel.message);
          window.alert('New Book Added Successfully!');
          this.BookFormGroup.reset();
        },
        error: (error) => {
          console.error('Error fetching done');
        },
      });
    }
  }
}
