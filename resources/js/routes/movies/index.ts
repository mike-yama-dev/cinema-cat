import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Api\MovieController::show
 * @see app/Http/Controllers/Api/MovieController.php:42
 * @route '/api/movies/{movie}'
 */
export const show = (args: { movie: string | number } | [movie: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/movies/{movie}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\MovieController::show
 * @see app/Http/Controllers/Api/MovieController.php:42
 * @route '/api/movies/{movie}'
 */
show.url = (args: { movie: string | number } | [movie: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{movie}', parsedArgs.movie.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\MovieController::show
 * @see app/Http/Controllers/Api/MovieController.php:42
 * @route '/api/movies/{movie}'
 */
show.get = (args: { movie: string | number } | [movie: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\MovieController::show
 * @see app/Http/Controllers/Api/MovieController.php:42
 * @route '/api/movies/{movie}'
 */
show.head = (args: { movie: string | number } | [movie: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\MovieController::show
 * @see app/Http/Controllers/Api/MovieController.php:42
 * @route '/api/movies/{movie}'
 */
    const showForm = (args: { movie: string | number } | [movie: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\MovieController::show
 * @see app/Http/Controllers/Api/MovieController.php:42
 * @route '/api/movies/{movie}'
 */
        showForm.get = (args: { movie: string | number } | [movie: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\MovieController::show
 * @see app/Http/Controllers/Api/MovieController.php:42
 * @route '/api/movies/{movie}'
 */
        showForm.head = (args: { movie: string | number } | [movie: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\Api\MovieController::show
 * @see app/Http/Controllers/Api/MovieController.php:42
 * @route '/movies/{movie}'
 */
export const show = (args: { movie: string | number } | [movie: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/movies/{movie}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\MovieController::show
 * @see app/Http/Controllers/Api/MovieController.php:42
 * @route '/movies/{movie}'
 */
show.url = (args: { movie: string | number } | [movie: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{movie}', parsedArgs.movie.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\MovieController::show
 * @see app/Http/Controllers/Api/MovieController.php:42
 * @route '/movies/{movie}'
 */
show.get = (args: { movie: string | number } | [movie: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\MovieController::show
 * @see app/Http/Controllers/Api/MovieController.php:42
 * @route '/movies/{movie}'
 */
show.head = (args: { movie: string | number } | [movie: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\MovieController::show
 * @see app/Http/Controllers/Api/MovieController.php:42
 * @route '/movies/{movie}'
 */
    const showForm = (args: { movie: string | number } | [movie: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\MovieController::show
 * @see app/Http/Controllers/Api/MovieController.php:42
 * @route '/movies/{movie}'
 */
        showForm.get = (args: { movie: string | number } | [movie: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\MovieController::show
 * @see app/Http/Controllers/Api/MovieController.php:42
 * @route '/movies/{movie}'
 */
        showForm.head = (args: { movie: string | number } | [movie: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
const movies = {
    show: Object.assign(show, show),
}

export default movies