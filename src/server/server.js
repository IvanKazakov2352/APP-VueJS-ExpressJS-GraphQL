const express = require("express");
const cors = require("cors")
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const resolver = require("./schema/resolver");

const app = express();
const PORT = 5000;

app.use(express.json())
app.use(cors({
  credentials: true,
  origin: "http://localhost:8080",
}))
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: resolver,
    graphiql: true
  })
);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
