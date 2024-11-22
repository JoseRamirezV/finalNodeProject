const {
   get,
   add,
   update,
   delete: deleteTask,
   seed,
} = require('#controllers/facts.controller');
const router = require('express').Router();

router.get('/', get);
router.post('/', add);
router.post('/seed', seed);
router.put('/:id', update);
router.delete('/:id', deleteTask);

module.exports = router;
