# Titan Talk

**Titan Talk** is a full-stack chat application that offers a modern and interactive messaging experience. It allows users to sign in or create an account, and once logged in, they can enjoy a feature-rich chat environment with unique animated avatars, a clean UI, and real-time messaging.

## Features

- **User Authentication**: Sign in or create an account to access the application.
- **Animated Avatars**: Each user gets a unique, animated funny avatar for their profile.
- **Sidebar**: Displays a list of all users with their profile pictures and full names. Includes a search input box for easy user lookup.
- **Messaging Interface**: 
  - Clean and beautiful UI with color-coded chat bubbles for sender and receiver.
  - Timestamp for each message.
  - Smooth scrolling through messages with auto-scrolling to the latest message.
  - Pulse shake animation and notification sound (sword slashing) for new messages.

## Tech Stack

- **Frontend**:
  - **React**: A popular JavaScript library for building user interfaces, allowing for the creation of dynamic and responsive components.
  - **Tailwind CSS**: A utility-first CSS framework for designing custom and modern user interfaces with ease.
  - **Zustand**: A small, fast, and scalable state-management tool for React applications, used for managing the app's global state.
  - **Daisy UI**: A component library that provides pre-built, customizable UI components to enhance the visual design and user experience.

- **Backend**:
  - **Node.js**: A JavaScript runtime environment used for building scalable and performant server-side applications.
  - **Express.js**: A minimal and flexible Node.js web application framework that provides robust features for building web and mobile applications.
  - **bcryptjs**: A library for hashing passwords securely, ensuring user credentials are protected.
  - **JWT (JSON Web Tokens)**: A compact, URL-safe means of representing claims to be transferred between two parties, used for authentication and authorization.
  - **MongoDB**: A NoSQL database that stores data in a flexible, JSON-like format, used for persisting user and message data.

- **Real-time Communication**:
  - **Socket.IO**: A library for real-time, bidirectional, and event-based communication between the server and the client, providing instant message delivery without the need to refresh the page.

## Contributing

If you'd like to contribute to Titan Talk, please fork the repository and submit a pull request with your changes. For major changes, please open an issue first to discuss what you would like to change.
