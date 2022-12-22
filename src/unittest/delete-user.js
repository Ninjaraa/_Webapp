import { gql, useMutation } from "@apollo/client";

// Component test

export const DELETE_USER_MUTATION = gql`
  mutation deleteUser($name: String!) {
    deleteUser(name: $name) {
      name
    }
  }
`;

// UseMutation is similar to useQuery, for UseMutation the mutations function needs to be executed 
export function DeleteButton() {

  const [mutate, { loading, error, data }] = useMutation(DELETE_USER_MUTATION);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  if (data) return <p>Successfully deleted</p>;

  return (

    <button onClick={() => mutate({ variables: { name: "TestUser" } })}>
      Delete TestUser
    </button>
    
  );
}
