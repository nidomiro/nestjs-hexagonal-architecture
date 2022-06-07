
# NestjsHexagonalArchitecture

This is a POC repository demonstrating a way to use the Hexagonal-architecture inside nestjs. (also works with any architecture which has a separate core linke Onion, ...)

The core does not have any implementation details of the adapters and can be configured from the outside.
This configuration includes what implementation of an adapter should be used (see [./apps/src/app/app.module.ts]() Lines 18-24 for more info).




---

This project was generated using [Nx](https://nx.dev).

