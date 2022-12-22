import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { GET_USER_QUERY, User } from "./user";

// NTS: Mock is an object that runs the request and answers with an result. Must be an exact match (shape and variables) to receive the right response while testing.
const mocks = [
  {
    request: {
      query: GET_USER_QUERY,
      variables: {
        name: "TestUser",
      }
    },
    result: {
      data: {
        user: { name: "TestUser" }
      }
    }
  }
];

// NTS: FindBy is used to test rendering after query completion.
it("Renders without any problem", async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <User name="TestUser" />
    </MockedProvider>
  );
  expect(await screen.findByText("Loading...")).toBeInTheDocument();
});

it("Render user", async () => {
  const userMock = {
    request: {
      query: GET_USER_QUERY,
      variables: { name: "TestUser" }
    },
    result: {
      data: {
        user: { name: "TestUser" }
      }
    }
  };
  render(
    <MockedProvider mocks={[userMock]} addTypename={false}>
      <User name="TestUser" />
    </MockedProvider>
  );
  expect(await screen.findByText("Loading...")).toBeInTheDocument();
  expect(await screen.findByText("Name is TestUser")).toBeInTheDocument();
});

// NTS: Simulates a network and error to be included in the test
it("If an error occur it will show", async () => {

  const userMock = {
    request: {
      query: GET_USER_QUERY,
      variables: { name: "TestUser" }
    },
    error: new Error("An error occurred")
  };

  render(
    <MockedProvider mocks={[userMock]} addTypename={false}>
      <User name="TestUser" />
    </MockedProvider>
  );
  expect(await screen.findByText("An error occurred")).toBeInTheDocument();
});
