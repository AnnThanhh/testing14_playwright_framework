import { bookingData } from "../../test-data/booking.data.ts";
import { ResponseCreateBooking } from "../../types/booking.type.ts";
import { LoginResponse } from "./../../types/auth.type";
import test, { expect } from "@playwright/test";

test.describe.serial("Delete Booking API", () => {
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

  test("Create booking for delete test", async ({ request }) => {
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

  test("Delete booking with valid credentials", async ({ request }) => {
    const response = await request.delete(
      `https://restful-booker.herokuapp.com/booking/${bookingId}`,
      {
        headers: {
          "Content-Type": "application/json",
          Cookie: `token=${token}`,
        },
      },
    );
    expect(response.status()).toBe(201);
  });

  test("Verify booking was deleted", async ({ request }) => {
    const response = await request.get(
      `https://restful-booker.herokuapp.com/booking/${bookingId}`,
    );
    expect(response.status()).toBe(404);
  });
});
