import { express } from "express";
import { pkg } from "body-parser";
import { router } from "./routes/Router.js";

import { sequelize } from "./utils/database.js";
import { association } from "./models/association.js";

const app = express();
const { json, urlencoded } = pkg;

app.use(json());
app.use(urlencoded({ extended: true }));

(async () => {
  try {
    association.association();
    await sequelize.sync();
    app.listen(3000, function () {
      console.log("Listenging from 3000");
    });
  } catch (error) {
    console.error("Error!", error);
  }
})();



app.use("/", router);
