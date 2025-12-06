import sequelize from "../config/sequelize";
import user from "./users";
import task from "./tasks";

//import other models here
//import post from "./POST"

const models = {
  user,
  task
};

export { sequelize };
export default models;