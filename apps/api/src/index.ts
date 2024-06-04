import cors from "cors";
import express from "express";
import { trpcExpress } from "@cosmic-calendar/trpc-server";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/trpc", trpcExpress);

app.listen(8080, () => console.log(`Listening on Port : ${8080}`));
