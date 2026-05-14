import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\MovieController::indexShow
 * @see app/Http/Controllers/Api/MovieController.php:24
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
 * @see app/Http/Controllers/Api/MovieController.php:24
 * @route '/'
 */
indexShow.url = (options?: RouteQueryOptions) => {
    return indexShow.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\MovieController::indexShow
 * @see app/Http/Controllers/Api/MovieController.php:24
 * @route '/'
 */
indexShow.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexShow.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\MovieController::indexShow
 * @see app/Http/Controllers/Api/MovieController.php:24
 * @route '/'
 */
indexShow.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexShow.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\MovieController::indexShow
 * @see app/Http/Controllers/Api/MovieController.php:24
 * @route '/'
 */
    const indexShowForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: indexShow.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\MovieController::indexShow
 * @see app/Http/Controllers/Api/MovieController.php:24
 * @route '/'
 */
        indexShowForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexShow.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\MovieController::indexShow
 * @see app/Http/Controllers/Api/MovieController.php:24
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
/**
* @see \App\Http\Controllers\Api\MovieController::getMovieDetails
 * @see app/Http/Controllers/Api/MovieController.php:42
 * @route '/movies/{id}'
 */
export const getMovieDetails = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getMovieDetails.url(args, options),
    method: 'get',
})

getMovieDetails.definition = {
    methods: ["get","head"],
    url: '/movies/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\MovieController::getMovieDetails
 * @see app/Http/Controllers/Api/MovieController.php:42
 * @route '/movies/{id}'
 */
getMovieDetails.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return getMovieDetails.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\MovieController::getMovieDetails
 * @see app/Http/Controllers/Api/MovieController.php:42
 * @route '/movies/{id}'
 */
getMovieDetails.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getMovieDetails.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\MovieController::getMovieDetails
 * @see app/Http/Controllers/Api/MovieController.php:42
 * @route '/movies/{id}'
 */
getMovieDetails.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getMovieDetails.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\MovieController::getMovieDetails
 * @see app/Http/Controllers/Api/MovieController.php:42
 * @route '/movies/{id}'
 */
    const getMovieDetailsForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getMovieDetails.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\MovieController::getMovieDetails
 * @see app/Http/Controllers/Api/MovieController.php:42
 * @route '/movies/{id}'
 */
        getMovieDetailsForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getMovieDetails.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\MovieController::getMovieDetails
 * @see app/Http/Controllers/Api/MovieController.php:42
 * @route '/movies/{id}'
 */
        getMovieDetailsForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getMovieDetails.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getMovieDetails.form = getMovieDetailsForm
const MovieController = { indexShow, getMovieDetails }

export default MovieController