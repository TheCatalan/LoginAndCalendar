const express = require('express');

const router = express.Router();

const BlogPost = require('../models/blogPost');

// Routes
router.get('/', (req, res) => {

    BlogPost.find({ })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });
});

router.post("/api/login", async (req, res, next) => {
    var ret = { id: id, firstName: fn, lastName: ln, error: "" };
    res.status(200).json(ret);
  });

router.post('/save', (req, res) => {
        const data = req.body;

        const newBlogPost = new BlogPost(data);
        // .save

        newBlogPost.save((error) => {
            if (error){
                res.status(500).json({ msg: 'Sorry, internal server errors'});
                return;
            }
            return res.json({
                msg: 'Your data has been saved!!!'
            });
        });
        
});

module.exports = router;

