const express = require("express");
const router = express.Router();
const agendamentosController = require("../controllers/agendamento-controller");

router.get("/agendamentos", agendamentosController.getAgendamentosController);
router.post("/agendamentos/criarAgendamento", agendamentosController.createAgendamentoController);
router.get("/agendamentos/findAgendamentoPorData/{data}", agendamentosController.findAgendamentoPorDataController);

module.exports = router;