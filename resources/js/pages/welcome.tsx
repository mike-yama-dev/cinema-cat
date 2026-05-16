import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login, register } from '@/routes';
import React, { useEffect, useState } from 'react';
import { getNowPlaying } from './../utils/tmdb';

import MoviePoster from '@/components/welcome/movie-poster';

export default function Welcome({
    canRegister = true,
    nowPlaying,
    populars,
    topRated,
    upcoming,
}: {
    canRegister?: boolean;
    nowPlaying: Array<{ id: number; title: string; overview: string, poster_path: string }>; 
    populars: Array<{ id: number; title: string; overview: string, poster_path: string }>;
    topRated: Array<{ id: number; title: string; overview: string, poster_path: string }>;
    upcoming: Array<{ id: number; title: string; overview: string, poster_path: string }>;
}) {
    const { auth } = usePage().props;
    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6  lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <header className="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-8/10">
                    <nav className="flex items-center justify-end gap-4">
                        {auth.user ? (
                            <Link
                                href={dashboard()}
                                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={login()}
                                    className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                >
                                    Log in
                                </Link>
                                {canRegister && (
                                    <Link
                                        href={register()}
                                        className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                    >
                                        Register
                                    </Link>
                                )}
                            </>
                        )}
                    </nav>
                </header>
                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <main className="flex w-full max-w-[335px] flex-col lg:max-w-8/10">



        <div>
            <MoviePoster title="Now Playing" movies={nowPlaying} />
            <MoviePoster title="Popular" movies={populars} />
            <MoviePoster title="Top Rated" movies={topRated} />
            <MoviePoster title="Upcoming" movies={upcoming} />
        </div>


                    </main>
                </div>
                <div className="hidden h-14.5 lg:block"></div>
            </div>
        </>
    );
}
