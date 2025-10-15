import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema.js';

const app = express()
const PORT = 5000;

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))


app.listen(PORT);
console.log('Server Started');