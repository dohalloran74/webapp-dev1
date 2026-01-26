'use strict';

import logger from "../utils/logger.js";

/* create this page to create about controller */
const about = {
  createView(request, response) {
    logger.info("About page loading!");
    response.send('About the Playlist app!');   
  },
};

export default about;
