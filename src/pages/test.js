async function loadQuestao(){
    const QuestoesController = require('../controllers/QuestoesController');
    const response = await QuestoesController.pesquisarPorId(10);

    console.log(response);
}

loadQuestao();