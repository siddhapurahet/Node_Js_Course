const express = require('express');
const app = express();

const path = require('path');

/*app.use(express.static('./public'))

here, express.static is the module.
suppose there are many files that we want to display so
we combine them in one folder (here public) and then use it*/

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './index.html'))
})

app.all('*', (req, res) => {
    res.send('Resource Not found...Sorry');
})

app.listen(5000, () => {
    console.log('Server is ON...');
}) 