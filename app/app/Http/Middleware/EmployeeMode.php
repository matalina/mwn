<?php

namespace App\Http\Middleware;

use Closure;

class EmployeeMode
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
        if(session()->has('store_mode')) {
            if(session()->get('store_mode')) {
                return $next($request);
            }
        }

        session()->flash('error','You are not authorized to view that page.');
        return back();
    }
}
