const db = require('../config/db');

const getBanner = (req, res) => {
    db.query('SELECT * FROM banner WHERE id=1', (err, result) => {
        if (err) throw err;
        res.json(result[0]);
    });
};

const updateBanner = (req, res) => {
    const { description, timer, link, isVisible } = req.body;
    db.query(
        'UPDATE banner SET description=?, timer=?, link=?, isVisible=? WHERE id=1',
        [description, timer, link, isVisible],
        (err, result) => {
            if (err) throw err;
            res.json({ success: true });
        }
    );
};

module.exports = { getBanner, updateBanner };
