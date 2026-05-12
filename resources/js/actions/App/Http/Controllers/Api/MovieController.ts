import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\MovieController::index
 * @see app/Http/Controllers/Api/MovieController.php:16
 * @route '/api/movies/now-playing'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/movies/now-playing',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\MovieController::index
 * @see app/Http/Controllers/Api/MovieController.php:16
 * @route '/api/movies/now-playing'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\MovieController::index
 * @see app/Http/Controllers/Api/MovieController.php:16
 * @route '/api/movies/now-playing'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\MovieController::index
 * @see app/Http/Controllers/Api/MovieController.php:16
 * @route '/api/movies/now-playing'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\MovieController::index
 * @see app/Http/Controllers/Api/MovieController.php:16
 * @route '/api/movies/now-playing'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\MovieController::index
 * @see app/Http/Controllers/Api/MovieController.php:16
 * @route '/api/movies/now-playing'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\MovieController::index
 * @see app/Http/Controllers/Api/MovieController.php:16
 * @route '/api/movies/now-playing'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\Api\MovieController::show
 * @see app/Http/Controllers/Api/MovieController.php:42
 * @route '/api/movies/{movie}'
 */
const show66087fe8703096f1ab44b1d5c494ea9e = (args: { movie: string | number } | [movie: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show66087fe8703096f1ab44b1d5c494ea9e.url(args, options),
    method: 'get',
})

show66087fe8703096f1ab44b1d5c494ea9e.definition = {
    methods: ["get","head"],
    url: '/api/movies/{movie}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\MovieController::show
 * @see app/Http/Controllers/Api/MovieController.php:42
 * @route '/api/movies/{movie}'
 */
show66087fe8703096f1ab44b1d5c494ea9e.url = (args: { movie: string | number } | [movie: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { movie: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    movie: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        movie: args.movie,
                }

    return show66087fe8703096f1ab44b1d5c494ea9e.definition.url
            .replace('{movie}', parsedArgs.movie.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\MovieController::show
 * @see app/Http/Controllers/Api/MovieController.php:42
 * @route '/api/movies/{movie}'
 */
show66087fe8703096f1ab44b1d5c494ea9e.get = (args: { movie: string | number } | [movie: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show66087fe8703096f1ab44b1d5c494ea9e.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\MovieController::show
 * @see app/Http/Controllers/Api/MovieController.php:42
 * @route '/api/movies/{movie}'
 */
show66087fe8703096f1ab44b1d5c494ea9e.head = (args: { movie: string | number } | [movie: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show66087fe8703096f1ab44b1d5c494ea9e.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\MovieController::show
 * @see app/Http/Controllers/Api/MovieController.php:42
 * @route '/api/movies/{movie}'
 */
    const show66087fe8703096f1ab44b1d5c494ea9eForm = (args: { movie: string | number } | [movie: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show66087fe8703096f1ab44b1d5c494ea9e.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\MovieController::show
 * @see app/Http/Controllers/Api/MovieController.php:42
 * @route '/api/movies/{movie}'
 */
        show66087fe8703096f1ab44b1d5c494ea9eForm.get = (args: { movie: string | number } | [movie: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show66087fe8703096f1ab44b1d5c494ea9e.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\MovieController::show
 * @see app/Http/Controllers/Api/MovieController.php:42
 * @route '/api/movies/{movie}'
 */
        show66087fe8703096f1ab44b1d5c494ea9eForm.head = (args: { movie: string | number } | [movie: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show66087fe8703096f1ab44b1d5c494ea9e.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show66087fe8703096f1ab44b1d5c494ea9e.form = show66087fe8703096f1ab44b1d5c494ea9eForm
    /**
* @see \App\Http\Controllers\Api\MovieController::show
 * @see app/Http/Controllers/Api/MovieController.php:42
 * @route '/movies/{movie}'
 */
const show7d24af21af5c3091a9721c9b22be3638 = (args: { movie: string | number } | [movie: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show7d24af21af5c3091a9721c9b22be3638.url(args, options),
    method: 'get',
})

show7d24af21af5c3091a9721c9b22be3638.definition = {
    methods: ["get","head"],
    url: '/movies/{movie}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\MovieController::show
 * @see app/Http/Controllers/Api/MovieController.php:42
 * @route '/movies/{movie}'
 */
show7d24af21af5c3091a9721c9b22be3638.url = (args: { movie: string | number } | [movie: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { movie: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    movie: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        movie: args.movie,
                }

    return show7d24af21af5c3091a9721c9b22be3638.definition.url
            .replace('{movie}', parsedArgs.movie.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\MovieController::show
 * @see app/Http/Controllers/Api/MovieController.php:42
 * @route '/movies/{movie}'
 */
show7d24af21af5c3091a9721c9b22be3638.get = (args: { movie: string | number } | [movie: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show7d24af21af5c3091a9721c9b22be3638.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\MovieController::show
 * @see app/Http/Controllers/Api/MovieController.php:42
 * @route '/movies/{movie}'
 */
show7d24af21af5c3091a9721c9b22be3638.head = (args: { movie: string | number } | [movie: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show7d24af21af5c3091a9721c9b22be3638.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\MovieController::show
 * @see app/Http/Controllers/Api/MovieController.php:42
 * @route '/movies/{movie}'
 */
    const show7d24af21af5c3091a9721c9b22be3638Form = (args: { movie: string | number } | [movie: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show7d24af21af5c3091a9721c9b22be3638.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\MovieController::show
 * @see app/Http/Controllers/Api/MovieController.php:42
 * @route '/movies/{movie}'
 */
        show7d24af21af5c3091a9721c9b22be3638Form.get = (args: { movie: string | number } | [movie: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show7d24af21af5c3091a9721c9b22be3638.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\MovieController::show
 * @see app/Http/Controllers/Api/MovieController.php:42
 * @route '/movies/{movie}'
 */
        show7d24af21af5c3091a9721c9b22be3638Form.head = (args: { movie: string | number } | [movie: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show7d24af21af5c3091a9721c9b22be3638.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show7d24af21af5c3091a9721c9b22be3638.form = show7d24af21af5c3091a9721c9b22be3638Form

export const show = {
    '/api/movies/{movie}': show66087fe8703096f1ab44b1d5c494ea9e,
    '/movies/{movie}': show7d24af21af5c3091a9721c9b22be3638,
}

/**
* @see \App\Http\Controllers\Api\MovieController::indexShow
 * @see app/Http/Controllers/Api/MovieController.php:23
 * @route '/'
 */
export const indexShow = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexShow.url(options),
    method: 'get',
})

indexShow.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\MovieController::indexShow
 * @see app/Http/Controllers/Api/MovieController.php:23
 * @route '/'
 */
indexShow.url = (options?: RouteQueryOptions) => {
    return indexShow.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\MovieController::indexShow
 * @see app/Http/Controllers/Api/MovieController.php:23
 * @route '/'
 */
indexShow.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexShow.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\MovieController::indexShow
 * @see app/Http/Controllers/Api/MovieController.php:23
 * @route '/'
 */
indexShow.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexShow.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\MovieController::indexShow
 * @see app/Http/Controllers/Api/MovieController.php:23
 * @route '/'
 */
    const indexShowForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: indexShow.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\MovieController::indexShow
 * @see app/Http/Controllers/Api/MovieController.php:23
 * @route '/'
 */
        indexShowForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexShow.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\MovieController::indexShow
 * @see app/Http/Controllers/Api/MovieController.php:23
 * @route '/'
 */
        indexShowForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexShow.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    indexShow.form = indexShowForm
const MovieController = { index, show, indexShow }

export default MovieController