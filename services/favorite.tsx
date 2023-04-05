import { Movie } from "../types/MoviesDB";

export class FavoriteService {
    favorites: Movie[] = [];
    private static singleton: FavoriteService;

    private constructor() {
        FavoriteService.singleton = this;
    }

    static getInstance() {
        if (!this.singleton) {
            this.singleton = new FavoriteService();
        }
        return this.singleton;
    }
}