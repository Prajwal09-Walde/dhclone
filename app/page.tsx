import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import MovieCarousel from "@/components/MovieCarousel"
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "@/lib/getMovies"



export default async function Home() {
  const upcomingMovies = await getUpcomingMovies();
  const popularMovies = await getPopularMovies();
  const topRatedMovies = await getTopRatedMovies();
  return (
    <main>
      <CarouselBannerWrapper />

      <div className="flex flex-col space-y-2 xl:-mt-48">
        <MovieCarousel movies={upcomingMovies} title="Upcoming" />
        <MovieCarousel movies={popularMovies} title="Popular" />
        <MovieCarousel movies={topRatedMovies} title="Top Rated Movies" />
      </div>
    </main>
  )
}
