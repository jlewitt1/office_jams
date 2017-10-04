const express = require('express');

//templating engine -->render HTML dynamically using handlebars
const hbs = require('hbs');
const fs = require('fs');

//stores port for heroku app-->will still run locally if doesn't work
const port = process.env.PORT || 8080;

//creates the app by calling the method
var app = express();

//takes directory that handles all HBS files
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine','hbs');

//req-->content of HTTP request; res-->type of response (ex:GET)
//next tells middleware when you are done and app will continue
app.use((req,res,next) => { 
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;
    console.log(log);
    //lets you add on to a file -->file name, content, 
    fs.appendFile('server.log',log + '\n', (err) => { 
        if (err) { 
            console.log('Unable to append to server log');
        }
    })
    next();
});

//middleware- lets you configure how the app works
app.use(express.static(__dirname + '/public'));

//name of function that will be called in hbs file, return its functionality
hbs.registerHelper('getCurrentYear',() => { 
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => { 
    return text.toUpperCase();
});

//HTTP event handlers
//url is first argument,request stores info about what is coming in, response deals with responding to the HTTP request
app.get('/',(req,res) => { 
    res.render('home.hbs', { 
        pageTitle: 'Home',
        welcomeMessage: 'Welcome to the Home page'
    }); 
});

//register a handler for get HTTP request
app.get('/login',(req, res) => {
    res.render('login.hbs', { 
        pageTitle: 'Signup/Login',
    }); 
});  

//callback function gets called with req and res
app.get('/profile',(req,res) => { 
    res.render('profile.hbs', { 
        pageTitle: 'Profile',
        welcomeMessage: 'My Profile'
    }); 
});

app.get('/bad',(req, res) => {
    res.send({ 
        errorMessage: 'Unable to handle request'
    });
});

//bind app to a port on our machine
app.listen(port, () => { 
    console.log(`Server is up on port ${port}`);
});