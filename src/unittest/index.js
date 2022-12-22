import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { User } from "./user";
import { DeleteButton } from "./delete-user";
import { link } from "./schema";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
});

function App() {
  return (
    <main>
      <User name="TestUser" />
      <DeleteButton />
    </main>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>
);
