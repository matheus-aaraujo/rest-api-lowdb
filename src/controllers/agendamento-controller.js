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

exports.createAgendamentoController = async (req, res) => {
    try {
        const bodyAgendamento = {
            "data": req.body.data,
            "inicio": req.body.inicio,
            "fim": req.body.fim
        }
        await db.get("agendamentos").push(bodyAgendamento).write();
        res.status(201).send({message: "deu bom"});
    } catch (error) {
        res.status(500).send({message: 'Deu ruim ae.'});
    }
}

exports.findAgendamentoPorDataController = async (req, res) => {
    try {
        const data = db.get("agendamentos").find(req.params.data).value();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({message: error});
    }
}