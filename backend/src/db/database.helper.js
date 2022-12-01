const { default: mongoose } = require("mongoose");

const databaseUrl =
  "mongodb+srv://admin:V90K7ehx2krw7OlM@cluster0.gbnr4oi.mongodb.net/jornada-fullstack-avancado-iuri";
const connectToDatabase = () => {
  return mongoose
    .connect(databaseUrl)
    .then(() => console.log("banco de dados conectado"))
    .catch((error) => console.log("erro na conexão\n", error));
};

const isObjectIdValid = (id) => {
  return true;
};

module.exports = {
  isObjectIdValid,
  connectToDatabase,
};
