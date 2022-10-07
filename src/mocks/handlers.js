import { rest } from "msw";
export const handlers = [
  rest.get("/habitaciones", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          cantidad: 3,
          bookings: [
            { start: "2022-10-23", end: "2022-10-28" },
            { start: "2022-10-05", end: "2022-01-08" },
            { start: "2022-11-02", end: "2022-01-05" },
          ],
        },
        {
          id: 2,
          cantidad: 4,
          bookings: [
            { start: "2022-10-23", end: "2022-10-28" },
            { start: "2022-11-15", end: "2022-01-18" },
            { start: "2022-11-10", end: "2022-11-15" },
          ],
        },
        {
          id: 3,
          cantidad: 2,
          bookings: [
            { start: "2022-10-23", end: "2022-10-28" },
            { start: "2022-11-05", end: "2022-01-08" },
            { start: "2022-11-01", end: "2022-11-05" },
          ],
        },
        {
          id: 4,
          cantidad: 2,
          bookings: [
            { start: "2022-10-23", end: "2022-10-28" },
            { start: "2022-11-05", end: "2022-01-08" },
            { start: "2022-11-01", end: "2022-11-05" },
          ],
        },
      ])
    );
  }),
  rest.post("/habitaciones", (req, res, ctx) => {
    return res(ctx.json({ success: true }));
  }),
];
