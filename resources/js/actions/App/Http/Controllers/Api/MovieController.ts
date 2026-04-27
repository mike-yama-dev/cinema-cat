import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\MovieController::index
 * @see app/Http/Controllers/Api/MovieController.php:15
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
 * @see app/Http/Controllers/Api/MovieController.php:15
 * @route '/api/movies/now-playing'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\MovieController::index
 * @see app/Http/Controllers/Api/MovieController.php:15
 * @route '/api/movies/now-playing'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\MovieController::index
 * @see app/Http/Controllers/Api/MovieController.php:15
 * @route '/api/movies/now-playing'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\MovieController::index
 * @see app/Http/Controllers/Api/MovieController.php:15
 * @route '/api/movies/now-playing'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\MovieController::index
 * @see app/Http/Controllers/Api/MovieController.php:15
 * @route '/api/movies/now-playing'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\MovieController::index
 * @see app/Http/Controllers/Api/MovieController.php:15
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
const MovieController = { index }

export default MovieController