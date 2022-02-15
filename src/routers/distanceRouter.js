const router = require('express').Router();

const distanceController = require("../controllers/distanceController");

router.post('/', async (req, res) => {
  /*Assumindo: 
    req.body = {
      addresses: [
        "Av. Rio Branco, 1 Centro, Rio de Janeiro RJ, 20090 003", 
        "Praça Mal. Âncora, 122 Centro, Rio de Janeiro RJ, 20021 200", 
        "Rua 19 de Fevereiro, 34 Botafogo, Rio de Janeiro RJ, 22280 030",
        ...
      ]
    };
  */
  
  try {
    const distances = await distanceController.getDistances(req.body);
    const closer = distanceController.getCloser(distances);
    const further = distanceController.getFurther(distances);

    const finalResponse = {
      distances,
      closer,
      further
    };

    res.status(200).send(finalResponse);
  }
  catch (err) {
    res.sendStatus(500);
  }
});

module.exports = router;