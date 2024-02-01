import { SearchResults } from "@/typings";

async function fetchFromTMDB (url: URL, cacheTime?: number) {
    url.searchParams.set("include_adult", "false");
    url.searchParams.set("include_video", "false");
    url.searchParams.set("sort_by", "popularity.desc");
    url.searchParams.set("language", "en-US");
    url.searchParams.set("page", "1");

    const options: RequestInit = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.API_AUTH}`,
        },
        next: {
            revalidate: cacheTime || 60 * 60 * 24,
        },
    };

    const resp = await fetch(url.toString(), options);
    const data = (await resp.json()) as SearchResults;
    return data;
}

export async function getDiscoverMovies (id?: string, keywords?: string) {
    const url = new URL(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&${process.env.API_KEY}`);

    keywords && url.searchParams.set("with_keywords", keywords);
    id && url.searchParams.set("genre_id", id);

    const data = await fetchFromTMDB(url);
    return data.results;
}

export async function getSearchedMovies (term: string) {
    const url = new URL(`https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&${process.env.API_KEY}`);

    url.searchParams.set("query", term);
    url.searchParams.set("include_adult", "false");
    url.searchParams.set("language", "en-us");
    url.searchParams.set("page", "1");

    const options: RequestInit = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.API_AUTH}`
        },
        next: {
            revalidate: 60 * 60 * 24,
        },

    };

    const resp = await fetch(url.toString(), options);
    const data = (await resp.json()) as SearchResults;

    return data.results;
}

export async function getUpcomingMovies () {
    const url = new URL(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&${process.env.API_KEY}`);
    const data = await fetchFromTMDB(url);

    return data.results;
}

export async function getTopRatedMovies () {
    const url = new URL(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&${process.env.API_KEY}`);
    const data = await fetchFromTMDB(url);

    return data.results;
}

export async function getPopularMovies () {
    const url = new URL(`https://api.themoviedb.org/3/person/popular?language=en-US&page=1&${process.env.API_KEY}`);
    const data = await fetchFromTMDB(url);

    return data.results;
}

