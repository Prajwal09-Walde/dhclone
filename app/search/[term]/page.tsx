import MovieCarousel from '@/components/MovieCarousel';
import { getPopularMovies, getSearchedMovies } from '@/lib/getMovies';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    term: string,
  };
};

export default async function SearchPage({ params: { term } }: Props) {
  if (!term) return notFound();

  const termToUse = decodeURI(term);

  const movies = await getSearchedMovies(termToUse);
  const popularMovies = await getPopularMovies();
  return (
    <div className='max-w-7xl mx-auto'>
      <div className='flex flex-col space-y-4 mt-32 xl:mt-42'>
        <h1 className='text-6xl font-bold px-10'>Results for {termToUse}</h1>

        <MovieCarousel movies={movies} title='Movies' isVertical />
        <MovieCarousel movies={popularMovies} title='Movies you may like' />
      </div>
    </div>
  )
}
