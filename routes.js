'use strict';

import express from 'express';
const router = express.Router();
import logger from "./utils/logger.js";

import start from './controllers/start.js';
import dashboard from './controllers/dashboard.js';
/* add this to import about controller */
import about from './controllers/about.js';
import playlist from './controllers/playlist.js';
import stats from './controllers/stats.js';




router.get('/', start.createView);
router.get('/dashboard', dashboard.createView);
router.get('/about', about.createView);
router.get('/error', (request, response) => response.status(404).end('Page not found.'));
/*add this to add playlist route */
router.get('/playlist/:id', playlist.createView);
router.post('/playlist/:id/addsong', playlist.addSong);
router.post('/dashboard/addplaylist', dashboard.addPlaylist);
router.get('/playlist/:id/deletesong/:songid', playlist.deleteSong);
router.get('/dashboard/deleteplaylist/:id', dashboard.deletePlaylist);
router.post('/playlist/:id/updatesong/:songid', playlist.updateSong);
router.get('/stats', stats.createView);

// Add this route for searching by category
router.get('/searchCategory', dashboard.createView);

// Add this route for sorting data
router.get('/sortData', dashboard.createView);







export default router;
