import express from 'express';

const router = express.Router();

router.get('/', () => {
    res.send('This works!!!')
})

export default router;