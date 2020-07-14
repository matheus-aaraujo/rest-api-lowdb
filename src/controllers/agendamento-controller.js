const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const db = lowdb(new FileSync("src/data/db.json"));
db.defaults({ agendamentos: [] }).write();

exports.getAgendamentosController = async (req, res) => {
    try {
        const data = db.get("agendamentos").value();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({message: error});
    }
}