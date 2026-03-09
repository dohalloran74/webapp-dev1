'use strict';

import express from 'express';
const router = express.Router();
import logger from "./utils/logger.js";

import start from './controllers/start.js';
import dashboard from './controllers/dashboard.js';
/* add this to import about controller */
import about from './controllers/about.js';
import playlist from './controllers/playlist.js';




router.get('/', start.createView);
router.get('/dashboard', dashboard.createView);
router.get('/about', about.createView);
router.get('/error', (request, response) => response.status(404).end('Page not found.'));
/*add this to add playlist route */
router.get('/playlist/:id', playlist.createView);
router.post('/playlist/:id/addsong', playlist.addSong);


export default router;
