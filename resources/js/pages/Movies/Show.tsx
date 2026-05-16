import React from 'react';

export default function Show({ movie }: { movie: { title: string; overview: string } }) {
    console.log(movie);
    return (

        <div className="p-8">
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            {/* Add other movie details here */}
        </div>
    );
}