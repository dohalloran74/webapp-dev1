'use strict';

import logger from "../utils/logger.js";

/* create this page to create about controller */
const about = {
  createView(request, response) {
    logger.info("About page loading!");
    /* add viewData to display about page correctly */
   const viewData = {
      title: 'About Playlist App',
    };
    response.render('about', viewData);
  },
};
export default about;
