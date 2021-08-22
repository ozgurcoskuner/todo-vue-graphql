import gql from 'graphql-tag';

const UPDATE_TASK = gql`
mutation updateTask(

    $id: Int!
    $description: String!

){
    update_todos_by_pk(
        pk_columns: {
            id: $id
        },
        _set: {
            description: $description
        }
    )
    {
        id
    }
}
`;

export default UPDATE_TASK;
