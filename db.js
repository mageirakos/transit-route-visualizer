const mongoose = require('mongoose')

mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => console.log("Connected to db")
);