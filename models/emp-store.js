'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const empStore = {
//change this location to emp-store.json file and name of collection for employee
  store: new JsonStore('./models/emp-store.json', { employees: [] }),
  collection: 'employees',


  //getAppInfo() { changed this to reflect the changes in the about.js file
  getEmployees() {
    return this.store.findAll(this.collection);
  },

};

export default empStore;

