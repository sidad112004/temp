# Free API Generator

**Free API Generator** is a powerful API hub designed for frontend developers who need easy access to a variety of APIs. Users can either browse through pre-existing APIs for common data types or create custom APIs by defining their own fields. Additionally, the platform includes a searchable directory of external API resources, such as weather and news APIs, making it easier for developers to find the data they need without leaving the hub.

## Features

- **API Library**: Access pre-built APIs for a range of common data types.
- **Custom API Generation**: Create and customize your own APIs by defining custom fields.
- **External API Links**: Easily find links to various external API providers, such as weather, finance, and more.
- **Intuitive UI**: A straightforward interface designed to streamline the API discovery process for developers.

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) - A powerful framework for server-rendered and static web applications.
- **Database**: [PostgreSQL](https://www.postgresql.org/) - A robust relational database for efficient data management.
- **ORM**: [Prisma](https://www.prisma.io/) - A modern ORM that helps manage database connections and queries seamlessly with Next.js.

## Getting Started

To set up this project locally, follow these steps:

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v14 or higher)
- **PostgreSQL** (v12 or higher)
- **Prisma CLI** (install via `npm install prisma --save-dev` if not already installed)

### Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/yourusername/free-api-generator.git
    cd free-api-generator
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Set Up Environment Variables**

    Create a `.env` file in the root directory and configure your database connection and other environment variables.

    ```env
    DATABASE_URL="postgresql://username:password@localhost:5432/yourdatabase"
    NEXT_PUBLIC_API_KEY="your_public_api_key"
    ```

4. **Migrate the Database**

    Run the Prisma migration to set up your database schema.

    ```bash
    npx prisma migrate dev --name init
    ```

5. **Seed the Database (Optional)**

    If you have initial data to seed, run the following command:

    ```bash
    npx prisma db seed
    ```

6. **Start the Development Server**

    ```bash
    npm run dev
    ```

    The app will be available at `http://localhost:3000`.

### Building for Production

To build and start the application in production mode, use:

```bash
npm run build
npm start
