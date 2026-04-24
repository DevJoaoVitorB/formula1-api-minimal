import fastify from 'fastify';
import cors from '@fastify/cors';
import { teams } from '@/data/teams.js';
import { drivers } from '@/data/drivers.js';

const server = fastify();

server.register(cors, {
    origin: '*',
});

interface Params {
    id: string;
}

server.get('/teams', async (request, response) => {
    response.type('application/json').code(200).send({ teams });
});

server.get<{ Params: Params }>('/teams/:id', async (request, response) => {
    const id = Number(request.params.id);
    const team = teams.find((team) => team.id === id);

    if (!team)
        return response
            .type('application/json')
            .code(404)
            .send({ message: 'Team not found' });

    response.type('application/json').code(200).send({ team });
});

server.get('/drivers', async (request, response) => {
    response.type('application/json').code(200).send({ drivers });
});

server.get<{ Params: Params }>('/drivers/:id', async (request, response) => {
    const id = Number(request.params.id);
    const driver = drivers.find((driver) => driver.id === id);

    if (!driver)
        return response
            .type('application/json')
            .code(404)
            .send({ message: 'Driver not found' });

    response.type('application/json').code(200).send({ driver });
});

server.get('/', async (request, response) => {
    response
        .type('application/json')
        .code(200)
        .send({ message: 'Welcome to the Formula 1 SEASON 2026 API!' });
});

server.setNotFoundHandler((request, response) => {
    response
        .type('application/json')
        .code(404)
        .send({ message: 'Resource not found' });
});

interface ConfigServer {
    port: number;
    host: string;
}

const config: ConfigServer = {
    port: Number(process.env.PORT) || 3000,
    host: process.env.HOST || '0.0.0.0',
};

server.listen({ port: config.port, host: config.host }, () => {
    console.log(`Server is running on http://${config.host}:${config.port}`);
});
