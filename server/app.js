const app = require('express')();
const mongoose = require('mongoose');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
// const Tweet = require('./models/Tweets');

app.use(cors());
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

mongoose
  .connect('mongodb://127.0.0.1/tweet', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log('Db connected'))
  .catch((e) => console.log(e));

// const sampleData = async () => {
//   await Tweet.create({
//     heading: 'React',
//     body: 'React is a Javascript library',
//     author: 'John',
//   });

//   await Tweet.create({
//     heading: 'Next js',
//     body: 'Next js is a framework built on top 0f React',
//     author: 'Doe',
//   });
// };

// sampleData();

app.listen(3001, () => {
  console.log('Server connected');
});
