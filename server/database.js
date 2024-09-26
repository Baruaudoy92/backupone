//"Sequelize = "ORM"=Object-Relatinal-Mapping"-permet de manipuler les donnes de BDD.
const {Sequelize}=require("sequelize")

// Function to sync the database
const syncDatabase = async () => {
    try {
      // Sync the models with the database
      await sequelize.sync({ alter: true }); // Use this line to synchronize the models
      console.log("Database synced successfully!");
    } catch (error) {
      console.error("Error syncing the database:", error);
    }
  };
  
  // Call the sync function
  syncDatabase();

const sequelize = new Sequelize("mangaDB","postgres","Bangla2024",{
    dialect:"postgres",
    host:"localhost",
    username:"postgres",
    password:"Bangla2024",
    database:"mangaDB",
    logging: console.log
})

module.exports={sequelize};