import 'jest';
import * as Request from 'supertest'

import app from '../index';

const request = Request(app.callback());

describe(` GraphQL`,()=>{

    it(' query one ',()=>{

        // request.post('/graphQL').write()

    })

});