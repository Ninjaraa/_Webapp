import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { DeleteButton, DELETE_USER_MUTATION } from "./delete-user";

// MockedProvider is used instead of ApolloProvider to test without communication with GraphQL Is depending on the button click to execute the mutation.

it("Renders Delete User without any problem", () => {
  render(
    <MockedProvider mocks={[]}>
      <DeleteButton />
    </MockedProvider>
  );
});

it("Should return states on loading and success when deleting a user", async () => {
  const deleteUser = { name: "TestUser" };
  const mocks = [
    {
      request: {
        query: DELETE_USER_MUTATION,
        variables: { name: "TestUser" }
      },
      result: { data: deleteUser }
    }
  ];

  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <DeleteButton />
    </MockedProvider>
  );

  // Triggers a simulated button click
  const button = await screen.findByText("Delete TestUser");
  userEvent.click(button); 

  expect(await screen.findByText("Loading...")).toBeInTheDocument();
  expect(await screen.findByText("Successfully deleted")).toBeInTheDocument();
});
