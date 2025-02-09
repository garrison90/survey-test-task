## Setup and Installation

1. **Clone the Repository**

```bash
   git clone https://github.com/garrison90/survey-test-task.git
   cd survey-test-task
```

2. **Install Dependencies**

```bash
   npm install
```

3. **Configure Environment Variables**

Create a `.env` file in the root directory of the project. You can refer to the example provided in the `.env.example` file.

Make sure to include the following variable:

```bash
  NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

4. **Running the Project**

**Development Mode**

To start the project in development mode, run:

```bash
  npm run dev
```

This command will start the server with hot-reloading enabled, allowing you to see changes immediately.

**Production Mode**

To run the project in production mode, execute:

```bash
  npm run prod
```

This will start the project in an optimized production environment.
