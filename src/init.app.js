const initApp = (app, express) => {
  app.use(express.json());
  app.use('*', (req, res) => {
    return res.status(404).json({ msg: 'User Not Found' });
  });
};

export default initApp;
