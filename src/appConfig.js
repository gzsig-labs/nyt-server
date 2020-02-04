const express = require(`express`);
const app = express();
const hbs = require(`hbs`);
const viewsPath = __dirname + '/views';
const {router} = require(`./routes`);
const cors = require('cors');

app.use(express.static(`${__dirname}/public`));
app.engine('hbs', require('hbs').__express);
app.set('view engine', 'hbs');
app.set(`views`, viewsPath);
hbs.registerPartials(`${viewsPath}/partials`);

app.use(cors())
app.use('/api', router);

module.exports = app;
