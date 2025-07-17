// To parse this data:
//
//   import { Convert } from "./file";
//
//   const issueBook = Convert.toIssueBook(json);

export interface IssueBook {
  id: number;
  issueDate: string;
  dueDate: string;
  returnDate: string;
  fine: number;
  status: string;
  member: Member;
  book: Book;
}

export interface Book {
  id: number;
  title: string;
  author: string;
  isbn: string;
  category: string;
  publisher: string;
  total_copies: number;
  available_copy: number;
}

export interface Member {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  joined_date: Date;
  password: string;
  role: string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toIssueBook(json: string): IssueBook[] {
    return JSON.parse(json);
  }

  public static issueBookToJson(value: IssueBook[]): string {
    return JSON.stringify(value);
  }
}
