import app from "./app.js";
import { config } from "dotenv";

//Call the .env file
config();

//Call the port value that are on .env file
const port = process.env.PORT;

//Show on the terminal, what is the port number that is running
app.listen(process.env.PORT, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
