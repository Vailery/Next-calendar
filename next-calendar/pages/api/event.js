import { getSession } from "next-auth/client";
import axios from "axios";

export default async function handler(req, res) {
  const session = await getSession({ req });
  if (req.method === "GET") {
    axios
      .get(
        `https://www.googleapis.com/calendar/v3/calendars/primary/events?key=${process.env.GOOGLE_API_KEY}`,
        {
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        return res.json({ ...response.data });
      })
      .catch((err) => {
        if (err.response) {
          return res.status(err.response.status).json({ ...err });
        } else {
          return res.status(500).json({ ...err });
        }
      });
  }
}
