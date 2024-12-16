import app from "./app.js";
import { config } from "dotenv";

config();

const port = process.env.PORT;

app.listen(process.env.PORT, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
