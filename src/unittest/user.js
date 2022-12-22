import { gql, useQuery } from "@apollo/client";

// Component test
// Make sure that both the query and the component are exported

export const GET_USER_QUERY = gql`
  query GetUser($name: String) {
    user(name: $name) {
      name
    }
  }
`;

export function User({ name }) {
  const { loading, error, data } = useQuery(GET_USER_QUERY, {
    variables: { name }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <p>
      Name is {data.user.name}
    </p>
  );
}
