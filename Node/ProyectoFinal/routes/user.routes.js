const express = require('express');
const passport = require('passport');

const router = express.Router();

router.post('/register', (req, res, next) => {
    passport.authenticate('register', (error, user) => {
        if (error) {
            return res.render('register', { error: error.message });
        }

        req.logIn(user, (err) => {
            if (err) {
                return res.render('register', { error: error.message });
            }

            return res.redirect('/products/1');
        });
    })(req, res, next);
});

router.post('/login', (req, res, next) => {
    passport.authenticate('login', (error, user) => {
        if (error) {
            return res.render('login', { error: error.message });
        }

        req.logIn(user, (err) => {
            if (err) {
                return res.render('login', { error: error.message });
            }

            return res.redirect('/products/1');
        });
    })(req, res, next);
});

router.post('/logout', (req, res, next) => {
    if (req.user) {
        req.logout();
    
        req.session.destroy(() => {
            res.clearCookie('connect.sid');
            res.redirect('/');
        });
    } else {
        return res.sendStatus(304);
    }
});

module.exports = router;