import './src/database';

import express from 'express';
import productRoutes from './src/routes/productRoutes';

import './src/database';

class App {
  constructor() {
    this.app = express();
    this.routes();
  }

  routes() {
    this.app.use('/products/', productRoutes);
  }
}

export default new App().app;
