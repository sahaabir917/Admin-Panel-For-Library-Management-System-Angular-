// To parse this data:
//
//   import { Convert } from "./file";
//
//   const book = Convert.toBook(json);

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

// Converts JSON strings to/from your types
export class Convert {
  public static toBook(json: string): Book[] {
    return JSON.parse(json);
  }

  public static bookToJson(value: Book[]): string {
    return JSON.stringify(value);
  }
}
