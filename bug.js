const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  db.getUser(userId, (err, user) => {
    if (err) {
      // Improper error handling; should send a proper error response
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else if (!user) {
      // Missing handling for user not found
      res.status(404).send('User not found');
    } else {
      res.json(user);
    }
  });
});

//Other routes and error handling omitted for brevity