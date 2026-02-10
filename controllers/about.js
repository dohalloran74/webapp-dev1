'use strict';

import logger from "../utils/logger.js";
import empStore from "../models/emp-store.js";

/* create this page to create about controller */
const about = {
  createView(request, response) {
    logger.info("About page loading!");
    /* add viewData to display about page correctly */
   const viewData = {
      title: 'About Playlist App',
      emps: empStore.getAppInfo()
    };

    logger.info(viewData.emps)
    response.render('about', viewData);
  },
};
export default about;
