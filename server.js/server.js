const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public')); // Serves alert.html from public/

// POST endpoint for alert data
app.post('/receive-alert', (req, res) => {
  const { lat, lon, time } = req.body;

  if (!lat || !lon || !time) {
    console.log("⚠️ Missing alert data.");
    return res.status(400).json({ error: "Missing data" });
  }

  console.log(`\n🚨 Flood Alert Received`);
  console.log(`📍 Latitude: ${lat}`);
  console.log(`📍 Longitude: ${lon}`);
  console.log(`🕒 Time: ${time}`);
  console.log(`🔗 Google Maps: https://www.google.com/maps?q=${lat},${lon}`);

  res.status(200).json({ status: "Alert received" });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
