// Importing required modules
import { Application, Router } from 'https://deno.land/x/oak/mod.ts';

// Create an instance of the Oak application
const app = new Application();
const router = new Router();

// Define an array of octopus facts
const octopusFacts = [
  'Octopuses have three hearts and blue blood.',
  'They are known for their intelligence and problem-solving skills.',
  'Octopuses can change both their color and texture to camouflage with their surroundings.',
  'The common octopus has about 240 suckers on each arm.',
  // Add more facts as needed
];

// Define a route to get a random octopus fact
router.get('/random-octopus-fact', (context) => {
  const randomFact = octopusFacts[Math.floor(Math.random() * octopusFacts.length)];
  context.response.body = { fact: randomFact };
});

// Add the router to the application
app.use(router.routes());
app.use(router.allowedMethods());

// Specify the port to listen on
const port = 3000;

// Start the server
console.log(`Server is running on http://localhost:${port}`);
await app.listen({ port });
