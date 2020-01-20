let totalClicks = 0;
module.exports = {
  async handleClick(req, res) {
    // Check that user has enough points to click
    if (req.session.points > 0) {
      // Reduce users points by one
      req.session.points -= 1;
      // Increment clicks by one and save current click in case
      // someone else is clicking at the same time
      totalClicks += 1;
      const currentClick = totalClicks;
      // Calculate amount of points awarded, starting at 0
      let awardPoints = 0;
      // Every 10th click earns 5 points
      if (currentClick % 10 === 0) {
        awardPoints = 5;
      }
      // Every 100th click earns 40 points
      if (currentClick % 100 === 0) {
        awardPoints = 40;
      }
      // Every 500th click earns 250 points
      if (currentClick % 500 === 0) {
        awardPoints = 250;
      }
      // Award points to user
      req.session.points += awardPoints;
      // Check if user has any points left
      if (req.session.points > 0) {
        // Calculate clicks needed for next award
        const clicksNeeded = 10 - (currentClick % 10);
        // Send points and clicks needed to user
        res.send({
          points: req.session.points,
          clicks: clicksNeeded,
        });
      } else {
        // If not, send just zero points
        res.send({
          points: 0,
        });
      }
    } else {
      // If not, send just zero points
      res.send({
        points: 0,
      });
    }
  },
  async handleNewGame(req, res) {
    if (!req.session.points || req.session.points === 0) {
      req.session.points = 20;
    }
    // Calculate clicks needed for next award
    const clicksNeeded = 10 - (totalClicks % 10);
    // Send points and clicks needed to user
    res.send({
      points: req.session.points,
      clicks: clicksNeeded,
    });
  },
  async handleGetPoints(req, res) {
    if (req.session.points) {
      // Calculate clicks needed for next award
      const clicksNeeded = 10 - (totalClicks % 10);
      // Send points and clicks needed to user
      res.send({
        points: req.session.points,
        clicks: clicksNeeded,
      });
    } else {
      res.send({
        points: 0,
      });
    }
  },
};
