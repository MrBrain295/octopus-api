import { Application, Router } from 'https://deno.land/x/oak/mod.ts';

const file = await Deno.readTextFile('facts.json');
const { octopusFacts } = JSON.parse(file);

const app = new Application();
const router = new Router();

router.get('/random-octopus-fact', (context) => {
  const randomFact = octopusFacts[Math.floor(Math.random() * octopusFacts.length)];
  context.response.body = { fact: randomFact };
});

app.use(router.routes());
app.use(router.allowedMethods());

const port = 3000;

await app.listen({ port });
