const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb+srv://JERE:JERE1234@cluster0.mukqz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useCreateIndex: true,
    useNewUrlParser: true
})

.then(db => console.log('DB is connected'))
.catch(err => console.error(err));