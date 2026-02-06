<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Loyers;
use App\Models\Properties;
use Illuminate\Http\Request;

use Illuminate\Http\RedirectResponse;

class PropertiesController extends Controller
{
    public function index ()
    {
        $properties = Loyers::all();

        return Inertia::render("Welcome", [
            'properties' => $properties,
            'image' => asset('storage/' . $properties->first()->image),
        ]);
    }

}
