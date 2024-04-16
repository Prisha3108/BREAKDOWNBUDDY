// Server.jsx
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const towRoutes = require("./Routes/TowRoute");
const fuelRoutes = require("./Routes/FuelRoute");
const tyreRoutes = require("./Routes/TyreRoute");
const batteryRoutes = require("./Routes/BatteryRoute");
const authRoute = require('./Routes/userauthRoute');
const mechauthRoute = require('./Routes/MechauthRoute');
const profileRoute = require("./Routes/ProfileRoute");
const contactRoute = require("./Routes/ContactRoute");


app.use(express.json());
app.use(cors());

async function connectToDB() {
  try {
    const conn = await mongoose.connect(
      'mongodb+srv://rirathore:mongo123@cluster0.3lbispc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    );
    console.log(`DB connected`);
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}

connectToDB();

app.use("/tow", towRoutes);
app.use("/fuel", fuelRoutes);
app.use("/tyre", tyreRoutes);
app.use("/battery", batteryRoutes);
app.use("/auth", authRoute);
app.use("/mechauth", mechauthRoute);
app.use('/myprofile', profileRoute);
app.use('/contactus', contactRoute);


app.listen(8000, () => {
  console.log(`Server is running on port 8000`);
});
