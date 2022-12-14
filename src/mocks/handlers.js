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
  rest.get("/habitacionesAdmin", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          cantidad: 3,
          bookings: [
            {
              start: "2022-10-23",
              end: "2022-10-28",
              price: "15",
              person: {
                name: "juan camilo ",
                email: "mail@mail.com",
                cantidad: "2",
              },
            },
            {
              start: "2022-10-05",
              end: "2022-01-08",
              price: "15",
              person: {
                name: "Carlos Mario",
                email: "mail@mail.com",
                cantidad: "2",
              },
            },
            {
              start: "2022-11-02",
              end: "2022-01-05",
              price: "15",
              person: {
                name: "Tatiana cuellar",
                email: "mail@mail.com",
                cantidad: "3",
              },
            },
          ],
        },
        {
          id: 2,
          cantidad: 4,
          bookings: [
            {
              start: "2022-10-23",
              end: "2022-10-28",
              price: "15",
              person: {
                name: "Sandra martinez",
                email: "mail@mail.com",
                cantidad: "4",
              },
            },
            {
              start: "2022-11-15",
              end: "2022-01-18",
              price: "15",
              person: {
                name: "Oscar Rodriguez",
                email: "mail@mail.com",
                cantidad: "2",
              },
            },
            {
              start: "2022-11-10",
              end: "2022-11-15",
              price: "15",
              person: {
                name: "Mario Benedeti",
                email: "mail@mail.com",
                cantidad: "3",
              },
            },
          ],
        },
        {
          id: 3,
          cantidad: 2,
          bookings: [
            {
              start: "2022-10-23",
              end: "2022-10-28",
              price: "15",
              person: {
                name: "Melissa castro",
                email: "mail@mail.com",
                cantidad: "1",
              },
            },
            {
              start: "2022-11-05",
              end: "2022-01-08",
              price: "15",
              person: {
                name: "Cristhian Martinez",
                email: "mail@mail.com",
                cantidad: "2",
              },
            },
            {
              start: "2022-11-01",
              end: "2022-11-05",
              price: "15",
              person: {
                name: "Juliana perez",
                email: "mail@mail.com",
                cantidad: "1",
              },
            },
          ],
        },
        {
          id: 4,
          cantidad: 2,
          bookings: [
            {
              start: "2022-10-23",
              end: "2022-10-28",
              price: "15",
              person: {
                name: "juan camilo ",
                email: "mail@mail.com",
                cantidad: "2",
              },
            },
            {
              start: "2022-11-05",
              end: "2022-01-08",
              price: "15",
              person: {
                name: "Daniel Castro",
                email: "mail@mail.com",
                cantidad: "2",
              },
            },
            {
              start: "2022-11-01",
              end: "2022-11-05",
              price: "15",
              person: {
                name: "Lina perez",
                email: "mail@mail.com",
                cantidad: "2",
              },
            },
          ],
        },
      ])
    );
  }),
];
