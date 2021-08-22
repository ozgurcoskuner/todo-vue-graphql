import gql from 'graphql-tag';

const TASKS = gql`
query todos{
    todos(order_by: {id: asc}) {
        id
        description
        isDone
    }
}
`;
export default TASKS;
