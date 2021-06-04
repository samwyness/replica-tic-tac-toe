# Replica / Tic-Tac-Toe

## Tech Stack

This application is a built using .NET 5 and React. See [documentation](https://docs.microsoft.com/en-us/aspnet/core/client-side/spa/react?view=aspnetcore-5.0&tabs=visual-studio) for more info.

## Project Structure

Main directories used in the application

- **ClientApp** (frontend)
  - **src/components** (UI components)
  - **src/hooks** (React hooks - contains stateful logic abstracted from the app)
  - **src/services** (Client side services - API providers, etc.)
  - **src/utils** (Utilities shared across the app)
- **Controllers** (Api Endpoints)
- **Models (Data** representation,)

## Getting Started

### Docker

**Build the image**

`docker compose build`

**Start the container**

`docker compose up`

Once the container is running you can view the app at http://localhost:8080/

## NOTES

Completing the test took roughly 4 hours. The extra time was used to refactor POC
code and tweak styles in an attempt to follow (loosely) Replica branding.

- Expected error cases that are currently unhandled
  - API/Server errors
    - Request/Response model validation
    - Network issues
- Given more time I would take the opportunity to:
  - Refine the Frontend UI/UX
    - Implement a 'Start screen' that welcomes the user(s)
      - Form fields where each player can enter their name
      - Allow the player to vs. a computer
      - Options for setting difficulty
    - Implement a 'Restart' button, allowing the board and scores for the game to be reset
    - Winner/Draw dialogue instead of using browser alerts
  - API validation
  - Unit testing against the Tic Tac Toe rules (Client & Server)
