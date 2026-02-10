'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const empStore = {
//change this location to emp-store.json file and name of collection for employee
  store: new JsonStore('./models/emp-store.json', { employee: {} }),
  collection: 'employee',


  getAppInfo() {
    return this.store.findAll(this.collection);
  },

};

export default empStore;

