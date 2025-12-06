import sequelize from "../config/sequelize";
import user from "./users";

//import other models here
//import post from "./POST"

const models = {
  user,
};

export { sequelize };
export default models;