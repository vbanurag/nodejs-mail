
import express from 'express';
import {sendMailController, user} from '../controller/formMail.js';

const router = express.Router();

router.post('/user', user);
router.post('/sendmail', sendMailController);

export default router;