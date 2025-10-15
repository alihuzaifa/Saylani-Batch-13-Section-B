import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList, GraphQLSchema } from 'graphql'

let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', age: 30 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 25 },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', age: 35 }
];


const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        age: { type: GraphQLInt },
    })
})

// for queries
const UserQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        users: {
            type: new GraphQLList(UserType),
            resolve() {
                return users;
            }
        },

        user: {
            type: UserType,
            args: {
                id: { type: GraphQLInt }
            },
            resolve(_, args) {
                return users.find(({ id }) => id === args?.id)
            }
        }
    }
})

const schema = new GraphQLSchema({ query: UserQuery });

export default schema