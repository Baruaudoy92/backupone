const { DataTypes } = require("sequelize");
const { sequelize } = require("../database");

// "table Client dans la dbb qui gere les requettes vers les details"

const Details = sequelize.define(
  "Details",
  {
    detail_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    author: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    manga_id: {
      type: DataTypes.INTEGER,
      allowNull: true, // Assuming manga_id can be null if not referenced
      references: {
        model: 'Mangas', // Assuming you have a 'Mangas' model
        key: 'manga_id', // This should be the primary key of the referenced table
      },
    },
  },
  {
    timestamps: true,
    createdAt: 'created_at', // Rename createdAt field
    updatedAt: 'updated_at', // Rename updatedAt field
  }
);

module.exports = Details;
