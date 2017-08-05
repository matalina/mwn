<?php

namespace App\Http\Middleware;

use Closure;

class CustomerMode
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if(session()->has('customer_mode')) {
            if(session()->get('customer_mode')) {
                return $next($request);
            }
        }

        session()->flash('error','You are not authorized to view that page.');
        return back();
    }
}
