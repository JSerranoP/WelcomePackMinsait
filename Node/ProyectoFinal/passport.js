const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const User = require('./models/User');
const Cart = require('./models/Cart');

const saltRounds = 10;

passport.use(
    'register',
    new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true,
    },
    async (req, email, password, done) => {
        try {
            const previousUser = await User.findOne({ email: email });

            if (previousUser) {
                const error = new Error('El usuario introducido ya esta registrado');
                return done(error);
            }

            if (password != req.body.repeat_password) {
                const error = new Error('Las contraseñas introducidas no coinciden');
                return done(error);
            }

            const hash = await bcrypt.hash(password, saltRounds);

            const newUser = new User({
                email: email,
                password: hash,
                repeat_password: req.body.repeat_password,
                name: req.body.name,
                surname: req.body.surname,
                country: req.body.country,
                phone_number: req.body.phone_number,
            });

            const savedUser = await newUser.save();

            const existsCart = await Cart.findOne({userId: savedUser._id})
            if( !existsCart ){
                const newCart = new Cart({
                    userId: savedUser._id,
                });
                const createdCart = await newCart.save();
            }
            
        done(null, savedUser);
        } catch (err) {
            return done(err);
        }
    }
    )
);

passport.use(
    'login',
    new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true,
        },
        async (req, email, password, done) => {
            try {
                const currentUser = await User.findOne({ email: email });

                if (!currentUser) {
                    const error = new Error('El usuario introducido no existe');
                    return done(error);
                }

                const isValidPassword = await bcrypt.compare(
                    password,
                    currentUser.password
                );

                if (!isValidPassword) {
                    const error = new Error(
                        'El usuario o la constraseña son incorrectos'
                    );
                    return done(error);
                }

                const existsCart = await Cart.findOne({userId: currentUser._id})
                if( !existsCart ){
                    const newCart = new Cart({
                        userId: currentUser._id,
                    });
                    const createdCart = await newCart.save();
                }

                done(null, currentUser);
            } catch (err) {
                return done(err);
            }
        }
    )
);

passport.serializeUser((user, done) => {
    return done(null, user._id);
});

passport.deserializeUser(async (userId, done)=>{
    try {
        const existingUser = User.findById(userId);
        return done(null, existingUser);
    } catch (err) {
        return done(err);
    }
});