import express from 'express';
import initApp from './src/init.app.js';
const app = express();
const PORT = 3000;
initApp(app, express);
app.listen(PORT, () => {
  console.log('Server is running');
});
