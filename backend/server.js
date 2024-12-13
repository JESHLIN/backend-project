// Uptime tracking
const startTime = Date.now();

app.get('/status', (req, res) => {
  res.json({
    status: 'healthy',
    uptime: Math.floor((Date.now() - startTime) / 1000), // uptime in seconds
    hostname: os.hostname(),
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;