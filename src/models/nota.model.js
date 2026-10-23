import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("nombre_bd", "usuario", "contraseña", {
    host: "localhost",
    dialect: "mysql",
    logging: false,
});

export const Nota = sequelize.define(
    "Nota",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        titulo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        contenido: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        categoria: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [["clase", "tarea", "idea"]],
            },
        },
    },
    {
        timestamps: true,
        tableName: "notas",
    },
);

export async function eliminarNota(req, res, next) {
    try {
        const nota = await notaService.eliminar(req.params.id);
        if (!nota) return res.status(404).json({ error: "Nota no encontrada" });
        res.status(204).send();
    } catch (error) {
        next(error);
    }
}