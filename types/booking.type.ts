export interface IBookingData {
  firstname: string;
  lastname: string;
  totalprice: number;
  depositpaid: boolean;
  bookingdates: Bookingdates;
  additionalneeds: string;
}

export interface Bookingdates {
  checkin: string;
  checkout: string;
}

export interface ResponseCreateBooking {
  bookingid: number;
  booking: IBookingData;
}
