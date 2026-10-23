import sequelize from "./config/database.js";
import app from "./app.js";

const PORT = 3000;

async function startServer() {
    try {
        // 1. Verifica que las credenciales y el servidor MySQL respondan
        await sequelize.authenticate();
        console.log("Conexión con MySQL establecida correctamente.");

        // 2. Sincroniza los modelos con la base de datos (crea las tablas si no existen)
        // Usa { alter: true } en desarrollo si agregas nuevos campos a tus modelos
        await sequelize.sync({ alter: false });
        console.log("Modelos sincronizados con la base de datos.");

        // 3. Inicia el servidor Express una vez que la base de datos esté lista
        app.listen(PORT, () => {
            console.log(`API lista en http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error(
            "No fue posible conectar con la base de datos MySQL:",
            error.message,
        );
        process.exit(1);
    }
}

startServer();
