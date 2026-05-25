import {
  bookingData,
  updateBookingData,
} from "../../test-data/booking.data.ts";
import { ResponseCreateBooking } from "../../types/booking.type.ts";
import { LoginResponse } from "./../../types/auth.type";
import test, { expect } from "@playwright/test";

test.describe.serial("Update Booking API", () => {
  let token: string;
  let bookingId: number;

  test.beforeAll(async ({ request }) => {
    const response = await request.post(
      "https://restful-booker.herokuapp.com/auth",
      {
        data: {
          username: "admin",
          password: "password123",
        },
      },
    );
    expect(response.status()).toBe(200);

    //parse response body
    const responseBody: LoginResponse = await response.json();
    token = responseBody.token;
  });

  test("Create booking with valid data", async ({ request }) => {
    const response = await request.post(
      "https://restful-booker.herokuapp.com/booking",
      {
        data: bookingData,
      },
    );
    expect(response.status()).toBe(200);
    const responseBody: ResponseCreateBooking = await response.json();
    expect(responseBody.booking).toEqual(bookingData);

    bookingId = responseBody.bookingid;
  });

  test("Update booking with valid data", async ({ request }) => {
    const response = await request.put(
      `https://restful-booker.herokuapp.com/booking/${bookingId}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Cookie: `token=${token}`,
        },

        data: updateBookingData,
      },
    );
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody).toEqual(updateBookingData);
  });
});
