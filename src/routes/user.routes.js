const {
   signup,
   delete: deleteUser,
   login,
   // forgotPassword,
   // changePassword,
} = require('#controllers/user.controller');
const router = require('express').Router();

router.get('/:email&:password', login);
router.post('/signUp', signup);
router.delete('/delete/:id&:pass', deleteUser);
// router.put('/change-password/:id', changePassword);
// router.put('/forgot-password', forgotPassword);

module.exports = router;
