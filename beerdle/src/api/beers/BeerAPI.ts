import Beer from '../../types/Beer';

const DEFAULT_BEERS_RETURNED: number = 10;

export default class BeerAPI {
    private static instance: BeerAPI;
    private static readonly BEERS: Beer[] = [
        new Beer({
            id: 1,
            name: 'Budweiser',
            brand: 'Anheuser-Busch',
            origin: 'USA',
            imageUrl: 'https://i.imgur.com/4fKX5rK.png',
        }),
    ];

    public getBeers(): Promise<Beer[]> {
        return Promise.resolve(BeerAPI.BEERS);
    }

    public getRandomBeer(): Promise<Beer> {
        const index = Math.floor(Math.random() * BeerAPI.BEERS.length);
        return Promise.resolve(BeerAPI.BEERS[index]);
    }

    public getBeersByName(
        name: string,
        limit: number = DEFAULT_BEERS_RETURNED,
    ): Promise<Beer[]> {
        return Promise.resolve(
            BeerAPI.BEERS.filter((beer: Beer) => {
                return beer.name.toLowerCase().includes(name.toLowerCase());
            }).slice(0, limit),
        );
    }

    public static getInstance(): BeerAPI {
        if (!BeerAPI.instance) {
            BeerAPI.instance = new BeerAPI();
        }

        return BeerAPI.instance;
    }
}
