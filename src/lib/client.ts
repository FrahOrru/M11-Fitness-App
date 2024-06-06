import { GraphQLClient } from 'graphql-request'
import { getSdk } from '../generated/graphql';

const client = new GraphQLClient('https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clwudachg02xb07te3h836r66/master', 
{ 
    headers: {
        Authorization: ''
    }
}
)
export const sdk = getSdk(client)