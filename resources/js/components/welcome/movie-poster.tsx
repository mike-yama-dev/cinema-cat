import { Link } from '@inertiajs/react';

export default function MovieSection({
  title,
  movies,
}: {
  title: string;
  movies: { id: number; title: string; poster_path: string }[];
}) {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="pb-8">
      <h1 className="font-bold text-xl mb-2">{title}</h1>

      <div className="flex gap-4 overflow-x-auto py-4">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="flex-shrink-0 w-40"
          >
            <Link href={`/movies/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full rounded-md object-cover"
              />

              <h3 className="mt-2 text-sm font-medium text-center line-clamp-2 dark:hover:text-[#b5b5b1] hover:text-gray-600 transition-colors">
                {movie.title}
              </h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}