// To parse this data:
//
//   import { Convert } from "./file";
//
//   const room = Convert.toRoom(json);

export interface Room {
  id: number;
  roomName: null;
  capacity: number;
  roomType: null;
  availability: string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toRoom(json: string): Room[] {
    return JSON.parse(json);
  }

  public static roomToJson(value: Room[]): string {
    return JSON.stringify(value);
  }
}
