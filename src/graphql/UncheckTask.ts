import gql from 'graphql-tag';

const UNCHECK_TASK = gql`
mutation uncheckTask(
$id: Int!,
){
    update_todos_by_pk(
        pk_columns:{
            id: $id
        },
        _set:{
            isDone: false
        }
    ){
        id
    }
}
`;
export default UNCHECK_TASK;
