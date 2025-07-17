import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Book } from '../model/book';
import { BookserviceService } from '../service/bookservice.service';
import { Room } from '../model/room';
import { RoomserviceService } from '../service/roomservice.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IssueBook } from '../model/issuebook';
import { IssuebookserviceService } from '../service/issuebookservice.service';

@Component({
  selector: 'app-dashboardcomponet',
  templateUrl: './dashboardcomponet.component.html',
  styleUrls: ['./dashboardcomponet.component.css'],
})
export class DashboardcomponetComponent implements OnInit, AfterViewInit {
  books: Book[] = [];
  room: Room[] = [];
  issueBooks: IssueBook[] = [];

  displayedColumns: string[] = [
    'id',
    'room_name',
    'capacity',
    'room_type',
    'availability',
  ];

  dataSource: MatTableDataSource<Room> = new MatTableDataSource<Room>();

  displayedColumnsForBooks: string[] = [
    'id',
    'title',
    'author',
    'isbn',
    'category',
    'publisher',
    'total_copies',
    'available_copy',
  ];

  dataSourceForBook: MatTableDataSource<Book> = new MatTableDataSource<Book>();

  displayedColumnsForIssueBook: string[] = [
    'id',
    'issueDate',
    'dueDate',
    'returnDate',
    'fine',
    'status',
    'book_title',
    'member_name',
  ];

  dataSourceForIssueBooks: MatTableDataSource<IssueBook> =
    new MatTableDataSource<IssueBook>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @ViewChild('paginatorRoom') paginatorRoom!: MatPaginator;
  @ViewChild('paginatorBook') paginatorBook!: MatPaginator;
  @ViewChild('paginatorIssueBook') paginatorIssueBook!: MatPaginator;

  constructor(
    private bookService: BookserviceService,
    private roomService: RoomserviceService,
    private issueBookService: IssuebookserviceService
  ) {}

  ngOnInit(): void {
    this.getAllBooks();
    this.getAllRooms();
    this.getAllIssuedBooks();
  }

  getAllBooks(): void {
    this.bookService.getAllBooks().subscribe({
      next: (response: Book[]) => {
        this.books = response;
        this.dataSourceForBook.data = this.books;
        console.log('Books retrieved:', this.books);
      },
      error: (error) => {
        console.error('Error fetching books:', error);
      },
    });
  }

  getAllIssuedBooks(): void {
    this.issueBookService.getAllIssuedBooks().subscribe({
      next: (response: IssueBook[]) => {
        this.issueBooks = response;
        this.dataSourceForIssueBooks.data = this.issueBooks;
        console.log('Issued books are : ', this.issueBooks);
      },
      error: (error) => {
        console.error('Error fetching issued books', error);
      },
    });
  }

  getAllRooms(): void {
    this.roomService.getAllRooms().subscribe({
      next: (response: Room[]) => {
        this.room = response;
        this.dataSource.data = this.room;
      },
      error: (error) => {
        console.error('Error fetching rooms:', error);
      },
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  applyBookFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceForBook.filter = filterValue.trim().toLowerCase();
  }

  applyIssuedBookFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceForIssueBooks.filter = filterValue.trim().toLowerCase();
  }

  // ngAfterViewInit(): void {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginatorRoom;
    this.dataSource.sort = this.sort;

    this.dataSourceForBook.paginator = this.paginatorBook;
    this.dataSourceForBook.sort = this.sort;

    this.dataSourceForIssueBooks.paginator = this.paginatorIssueBook;
    this.dataSourceForIssueBooks.sort = this.sort;
  }

  ngAfterViewInitForIssuedBook(): void {
    this.dataSourceForIssueBooks.paginator = this.paginator;
    this.dataSourceForIssueBooks.sort = this.sort;
  }

  ngAfterViewInitForBook(): void {
    this.dataSourceForBook.paginator = this.paginator;
    this.dataSourceForBook.sort = this.sort;
  }
}
