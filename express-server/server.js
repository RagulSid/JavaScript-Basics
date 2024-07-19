// const cors = require('cors');

const express = require('express');
const app = express();
const port = 3000;

// const corsOptions = {
//   origin: 'http://localhost:4000/',
//   optionsSuccessStatus: 200,
//   allowedHeaders: ['Content-Type', 'Authorization'],
// };

// app.use(cors(corsOptions));

// const jsonData = {
//     "1": {
//       "name": "John",
//       "email": "john@gmail.com"
//     },
//     "2": {
//       "name": "Elon",
//       "email": "Elon@gmail.com"
//     }
// };

app.get('/get-by-id', (req, res) => {
    const id = req.query.id;

    // http://localhost:3000/get-data?id=${id}`;
    // find the values of ID in JSON 
    const value = jsonData[id];
  
    if (value) {
      res.json(value);
    } else {
      res.status(404).json({ message: 'ID not found' });
    }
});

app.use(express.static(__dirname));

app.listen(port, () => {
    console.log("server is running");
})

const jsonData = require('./aus-sample.json');

app.get('/aus/:loan_guid/aus-scenario/:aus_scenario_id/view-scenario-values', (req, res) => {
    const { loan_guid, aus_scenario_id } = req.params;
    if (jsonData.hasOwnProperty(aus_scenario_id)) {
        const scenarioData = jsonData[aus_scenario_id];
        res.json(scenarioData);
    } else {
        res.status(404).json({ error: 'Scenario not found' });
    }
});

app.get('/aus/:loan_guid/aus-scenario/:aus_scenario_id/view-initial-values', (req, res) => {
    const { loan_guid, aus_scenario_id } = req.params;
    if (jsonData.hasOwnProperty(aus_scenario_id)) {
        const scenarioData = jsonData[aus_scenario_id];
        res.json(scenarioData);
    } else {
        res.status(404).json({ error: 'Scenario not found' });
    }
});

app.get('/aus/:loan_guid/aus-scenario/:aus_scenario_id/view-encompass-values', (req, res) => {
    const { loan_guid, aus_scenario_id } = req.params;
    if (jsonData.hasOwnProperty(aus_scenario_id)) {
        const scenarioData = jsonData[aus_scenario_id];
        res.json(scenarioData);
    } else {
        res.status(404).json({ error: 'Scenario not found' });
    }
});