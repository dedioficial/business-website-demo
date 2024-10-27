# Business Website Demo

This is a demo website for a business, containing a basic Home page. The site is built using Next.js, TypeScript, and Tailwind CSS.

## Technologies Used

- **Next.js** - A React framework for server-side rendering and static site generation, to improve SEO.
- **TypeScript** - A strongly typed programming language that builds on JavaScript.
- **Tailwind CSS** - A utility-first CSS framework for rapidly building custom designs.
- **Framer-Motion** - A production-ready motion library for React to create animations.

## Live Demo

The live demo can be [checked here](https://business-website-demo.mathandrade.com/).

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (>= 14.x)
- npm (or yarn)
- Docker (if you want to run with Docker)

### Running Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/business-website-demo.git
   ```

2. Navigate to the project directory:

   ```bash
   cd business-website-demo
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and go to [http://localhost:3000](http://localhost:3000) to see the demo.

### Building and Running with Docker

1. Build the Docker image:

   ```bash
   docker build -t business-website-demo .
   ```

2. Run the Docker container:

   ```bash
   docker run -p 3000:3000 business-website-demo:latest
   ```

3. Open your browser and go to [http://localhost:3000](http://localhost:3000) to see the demo running in Docker.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
