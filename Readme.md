# Tixsage - Ticket Booking Microservice Application

![Tixsage Logo](https://example.com/path/to/logo.png)

Tixsage is a comprehensive microservice application that allows users to book tickets for a wide range of events, from music concerts to football matches. This platform serves as an ecommerce solution for selling event tickets online. The application is built using modern technologies and follows a microservices architecture to ensure scalability, modularity, and maintainability.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Architecture](#architecture)
- [Services](#services)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Tixsage is a powerful ticket booking platform designed to offer a seamless user experience when purchasing tickets for various events. The application's microservices architecture enables individual services to be developed, deployed, and scaled independently, promoting code reusability and maintainability.

## Features

- User Authentication: Secure user authentication and registration process.
- Ticket Search: Browse and search for tickets based on event type, location, and date.
- Shopping Cart: Add multiple tickets to the cart and proceed to checkout.
- Order Management: View and manage booked tickets and purchase history.
- Scalable and Modular: The microservices architecture allows adding new services with ease.
- Docker & Kubernetes: Containerized services and Kubernetes orchestration for efficient scaling and deployment.
- Next.js Frontend: A feature-rich frontend built with Next.js for a seamless user interface.

## Technologies Used

- Express.js: A fast and minimalist web framework for building the authentication microservice.
- Typescript: Provides enhanced code readability and type checking.
- MongoDB: A NoSQL database for storing user information securely.
- Next.js: A React framework for building the frontend of the application.
- Docker: For containerization, packaging, and distributing services.
- Kubernetes: Orchestrating containerized services and automating deployment.
- Skaffold: Simplifies the Kubernetes development workflow.
- Azure: Cloud platform for hosting and deploying the application.

## Getting Started

Follow the instructions below to set up the development environment and run the Tixsage application locally.

### Prerequisites

- Node.js and npm: Ensure you have Node.js and npm installed. You can download them from the official website: https://nodejs.org/
- Docker: Install Docker to containerize the services. Follow the instructions at: https://docs.docker.com/get-docker/
- Kubernetes: Set up Kubernetes for managing containers. Refer to: https://kubernetes.io/docs/setup/
- Skaffold: Install Skaffold to streamline the development workflow. Instructions: https://skaffold.dev/docs/install/

### Installation

1. Clone the Tixsage repository from GitHub:

```
git clone https://github.com/MikunsHub/tixsage.git
cd tixsage
```

2. Install dependencies for the authentication service:

```
cd auth
npm install
```

3. Create a `.env` file in the `auth` service directory and set the required environment variables:

```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

Replace `your_mongodb_connection_string` with your MongoDB connection URL and `your_jwt_secret_key` with a secure secret for JWT token generation.


## Usage

To start the authentication service, run the following command from the `auth-service` directory:

```sh
npm run start
```

Visit `http://localhost:3000` to access the authentication service.

## Architecture

Tixsage follows a microservices architecture to break down the application into smaller, manageable services. Each service handles specific functionalities, such as authentication, cart management, and order processing. The services communicate with each other using REST APIs and are orchestrated using Kubernetes.

<!-- For more details on the architecture, please refer to the [Architecture](architecture.md) document. -->

## Services

The Tixsage application comprises the following services:

- **Auth Service**: Handles user authentication and registration.
- *(More services here as the application grows)*

## Deployment

Tixsage is deployed on the Azure cloud platform using Kubernetes and Skaffold. 
<!-- Detailed deployment instructions will be provided in the `deployment` directory. -->



---

If you have any questions or need assistance, please don't hesitate to contact me or open an issue on the GitHub repository. 
