import express from "express";
import bodyParser from "body-parser";
import router from "./routes/Router.js";

import sequelize from "./utils/database.js";
import association from "./models/Associations.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

(async () => {
  try {
    association.associations();
    await sequelize.sync();
    app.listen(3000, function () {
      console.log("Listenging from 3000");
    });
  } catch (error) {
    console.error("Error!", error);
  }
})();



app.use("/", router);
