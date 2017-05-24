import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as bodyParser from 'koa-bodyparser';
import {graphqlKoa} from 'graphql-server-koa';
import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLError,
    GraphQLNonNull,
    introspectionQuery,
    BREAK
} from 'graphql';

const app = new Koa();
const router = new Router();
const PORT = 3000;

app.use(bodyParser());

const schema: GraphQLSchema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'QueryType',
        fields: {
            testString: {
                type: GraphQLString,
                resolve(){
                    return 'it works';
                }
            }
        }
    })
});

router.post('/graphql', graphqlKoa({schema}));

app.use(router.routes());

app.use(router.allowedMethods());

// app.listen(PORT);

export default app;