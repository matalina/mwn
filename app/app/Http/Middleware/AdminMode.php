<?php

namespace App\Http\Middleware;

use Closure;

class AdminMode
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
        if(session()->has('admin_mode')) {
            if(session()->get('admin_mode')) {
                return $next($request);
            }
        }

        session()->flash('error','You are not authorized to view that page.');
        return back();
    }
}
