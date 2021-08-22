import gql from 'graphql-tag';

const ADD_TASK = gql`
mutation addTask(
    $description: String!
    $id: Int!
    $isDone: Boolean!
){
    insert_todos_one(
        object: {
            description: $description,
            isDone: $isDone,
            id: $id
        }
    ){
        description
        isDone
        id
    }
}

`;

export default ADD_TASK;
