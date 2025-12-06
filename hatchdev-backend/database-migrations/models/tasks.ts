import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize";
import User from "./users"

class Task extends Model {
	id!: number;
	title!: string;
	userId!: number;
	assignedId!: number;
	description!: string;
	status!: "pending" | "in-progress" | "completed";
}

Task.init(
	{
		// Model attributes are defined
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		title: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		userId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: "User",
				key: "id",
			},
		},
		assignedId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: "User",
				key: "id",
			},
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		status: {
			type: DataTypes.ENUM("pending", "in-progress", "completed"),
			allowNull: false,
			defaultValue: "pending",
		},
	},
	{
		// Other model options go here
		sequelize, // We need to pass the connection instance
		modelName: "Task", // We need to choose the model name
		timestamps: true,
		tableName: "tasks",
	}
);

//Associations
User.hasMany(Task, { foreignKey: "userId" });
Task.belongsTo(User, { foreignKey: "userId" });

export default Task;
