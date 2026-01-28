'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const appStore = {

  store: new JsonStore('./models/app-store.json', { info: {} }),
  collection: 'info',
  array: 'creators',

  getAppInfo() {
    return this.store.findAll(this.collection);
  },

};

export default appStore;


/* old code 
'use strict';

import logger from '../utils/logger.js';

const appStore = {

  // functions that manage JSON data to be added 

};

export default appStore;
*/