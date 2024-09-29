import { defineConfig } from "orval";

export default defineConfig({
  petstore: {
    output: {
      // httpClient: "fetch",
      // client: "fetch",
      client: 'react-query',
      target: "./src/client.ts",
      schemas: "./src/model",
      baseUrl: "https://petstore3.swagger.io/api/v3",
    },
    input: {
      target: "./openapi.json",
    },
  },
});