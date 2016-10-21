export class MovieModel {
    public title: string;
    public year: string;
    public imdbID: string;
    public type: string;
    public poster: string;
}

export class MovieListModel {
    public movie: MovieModel[];
    public totalResults: string;
    public response: string;
}