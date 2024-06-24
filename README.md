# Worko App

## Getting Started

### Prerequisites
- Node.js
- MongoDB

### Installation
1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd worko-app
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    ```plaintext
    DB_URI=mongodb://localhost:27017/worko
    PORT=3000
    ```

### Running the App
1. Start the MongoDB server.
2. Run the application:
    ```bash
    npm start
    ```

### API Endpoints
- GET `/worko/user`: List users
- GET `/worko/user/:userId`: Get user details
- POST `/worko/user`: Create user
- PUT `/worko/user/:userId`: Update user
- PATCH `/worko/user/:userId`: Update user
- DELETE `/worko/user/:userId`: Soft delete user

### Running Tests
```bash
npm test
