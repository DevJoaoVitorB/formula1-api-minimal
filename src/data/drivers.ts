interface Driver {
    id: number;
    name: string;
    team: string;
    nationality: string;
}

export const drivers: Driver[] = [
    { id: 1, name: 'Max Verstappen', team: 'Red Bull Racing', nationality: 'Netherlands' },
    { id: 2, name: 'Isack Hadjar', team: 'Red Bull Racing', nationality: 'France' },

    { id: 3, name: 'George Russell', team: 'Mercedes', nationality: 'United Kingdom' },
    { id: 4, name: 'Kimi Antonelli', team: 'Mercedes', nationality: 'Italy' },

    { id: 5, name: 'Charles Leclerc', team: 'Ferrari', nationality: 'France' },
    { id: 6, name: 'Lewis Hamilton', team: 'Ferrari', nationality: 'United Kingdom' },

    { id: 7, name: 'Lando Norris', team: 'McLaren', nationality: 'United Kingdom' },
    { id: 8, name: 'Oscar Piastri', team: 'McLaren', nationality: 'Australia' },

    { id: 9, name: 'Fernando Alonso', team: 'Aston Martin', nationality: 'Spain' },
    { id: 10, name: 'Lance Stroll', team: 'Aston Martin', nationality: 'Canada' },

    { id: 11, name: 'Pierre Gasly', team: 'Alpine', nationality: 'France' },
    { id: 12, name: 'Franco Colapinto', team: 'Alpine', nationality: 'Argentina' },

    { id: 13, name: 'Esteban Ocon', team: 'Haas', nationality: 'France' },
    { id: 14, name: 'Oliver Bearman', team: 'Haas', nationality: 'United Kingdom' },

    { id: 15, name: 'Alex Albon', team: 'Williams', nationality: 'Thailand' },
    { id: 16, name: 'Carlos Sainz', team: 'Williams', nationality: 'Spain' },

    { id: 17, name: 'Liam Lawson', team: 'Racing Bulls', nationality: 'New Zealand' },
    { id: 18, name: 'Arvid Lindblad', team: 'Racing Bulls', nationality: 'United Kingdom ' },

    { id: 19, name: 'Gabriel Bortoleto', team: 'Audi', nationality: 'Brazil' },
    { id: 20, name: 'Nico Hulkenberg', team: 'Audi', nationality: 'Germany' },

    { id: 21, name: 'Sergio Perez', team: 'Cadillac', nationality: 'Mexico' },
    { id: 22, name: 'Valtteri Bottas', team: 'Cadillac', nationality: 'Finland' },
];
