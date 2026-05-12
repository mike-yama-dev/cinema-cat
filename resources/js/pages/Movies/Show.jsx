import React from 'react';

export default function Show({ movie }) {
    return (
        <div className="p-8">
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            {/* Add other movie details here */}
        </div>
    );
}