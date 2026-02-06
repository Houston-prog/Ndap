<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Properties;
use Illuminate\Http\Request;

use Illuminate\Http\RedirectResponse;

class AdminController extends Controller
{
    public function index()
    {
        //$properties = Properties::all();

        return Inertia::render("Dashboard", [
            'properties' => Properties::latest()->get(),
            'stats' => [
                'total' => Properties::count(),
                'forSale' => Properties::where('status', 'A Vendre')->count(),
                'forRent' => Properties::where('status', 'A Louer')->count(),
                'locations' => Properties::distinct('location')->count(),
            ]
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'title' => 'required|string',
            'price' => 'required|numeric',
            'status' => 'required|string',
            'location' => 'required|string',
            'locality' => 'required|string',
            'bedrooms'=> 'required|numeric',
            'bathrooms' =>'required|numeric',
            'area'=> 'required|numeric',
            'description'=> 'nullable|string',
            'contact'=> 'required|string',
            'name'=> 'required|string',
            'images'=> 'image|mimes:jpeg,png,jpg,webp|max:2048', // Validation multi-images
        ]);

        $imagePaths = [];
        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                // Stockage sécurisé
                $path = $image->store('properties', 'public');
                $imagePaths[] = $path;
            }
        }

        Properties::create(array_merge($validated, [
            'title'=> $request->input('title'),
            'price'=> $request->input('price'),
            'status'=> $request->input('status'),
            'location'=> $request->input('location'),
            'locality'=> $request->input('locality'),
            'bedrooms'=> $request->input('bedrooms'),
            'bathrooms'=> $request->input('bathrooms'),
            'area'=> $request->input('area'),
            'description'=> $request->input('description'),
            'contact'=> $request->input('contact'),
            'name'=> $request->input('name'),
            'images' => $imagePaths // Sauvegarde du tableau de chemins JSON
        ]));

        return redirect()->back()->with('message', 'Propriété ajoutée !');
    }
}
