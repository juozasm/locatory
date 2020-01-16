const path = require('path');
const cors = require('cors');
const express = require('express');
const jwt = require('jsonwebtoken');

const PORT = 8085;

const app = express();

const SECRET = 'asfni54d9gv3';

app.use(cors());
app.options('*', cors());
app.use(express.json());

app.post('/token', (req, res, next) => {
  if (!req.body.username) {
    return res.status(400).send({ message: 'Missing username' });
  }

  if (!req.body.password) {
    return res.status(400).send({ message: 'Missing password' });
  }

  if (
    req.body.username === 'Vardenis' &&
    req.body.password === '2409081297'
  ) {
    const token = jwt.sign({ user: 'Vardenis' }, SECRET, {
      expiresIn: '30d',
    });

    return res.status(200).send({ token });
  }

  return res
    .status(400)
    .send({ message: 'Wrong username or password' });
});

app.get('/locations', (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).send({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(req.headers.authorization, SECRET);

    return res.status(200).send([
      { location: 'Lithuania', distance: 300 },
      { location: 'Latvia', distance: 450 },
      { location: 'Estonia', distance: 560 },
      { location: 'Poland', distance: 400 },
      { location: 'Belarus', distance: 700 },
      { location: 'Ukraine', distance: 1700 },
      { location: 'Russia', distance: 6000 },
      { location: 'China', distance: 7000 },
      { location: 'Singapore', distance: 7500 },
      { location: 'Germay', distance: 1600 },
      { location: 'France', distance: 2900 },
      { location: 'Spain', distance: 3330 },
      { location: 'Portugal', distance: 3830 },
      { location: 'Italia', distance: 3320 },
      { location: 'Greece', distance: 3330 },
      { location: 'Turkey', distance: 3000 },
      { location: 'United Kingdom', distance: 1800 },
      { location: 'Norway', distance: 900 },
      { location: 'Findland', distance: 900 },
      { location: 'Sweden', distance: 600 },
      { location: 'Denmark', distance: 1506 },
      { location: 'Ireland', distance: 3000 },
      { location: 'Malta', distance: 3500 },
      { location: 'Belguim', distance: 2430 },
      { location: 'Netherlands', distance: 2340 },
      { location: 'Croatia', distance: 2400 },
      { location: 'Bulgaria', distance: 1840 },
      { location: 'Serbia', distance: 1760 },
      { location: 'Romania', distance: 1600 },
      { location: 'Moldova', distance: 1550 },
      { location: 'Austria', distance: 1500 },
      { location: 'Serbia', distance: 1330 },
      { location: 'Slovakia', distance: 1300 },
      { location: 'Hungary', distance: 1200 },
      { location: 'Czech Republic', distance: 1100 },
      { location: 'Iceland', distance: 1900 },
    ]);
  } catch (err) {
    return res.status(403).send({ message: 'Invalid token' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} port!`);
});
