import { app } from "../src/app";
import { env } from "./env";

app
  .listen({
    host: "0.0.0.0",
    port: env.PORT,
  })
  .then((port) => {
    console.log(`🚀 HTTP Server Running on port ${port}`);
  });
