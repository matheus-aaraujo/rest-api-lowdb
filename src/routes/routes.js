const express = require("express");
const router = express.Router();
const agendamentosController = require("../controllers/agendamento-controller");

router.get("/agendamentos", agendamentosController.getAgendamentosController);

module.exports = router;