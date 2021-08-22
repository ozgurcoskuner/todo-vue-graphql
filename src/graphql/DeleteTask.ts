import gql from 'graphql-tag';

const DELETE_TASK = gql`
mutation deleteTask(
        $id: Int!
){
    delete_todos_by_pk(
        id: $id
    ){
        id
    }
}
`;

export default DELETE_TASK;
