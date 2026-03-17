<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Loyers;
use App\Models\Properties;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use Illuminate\Http\RedirectResponse;

class PropertiesController extends Controller
{
    public function index()
    {
        $properties = DB::table('loyers');

        $properties = $properties->get()->map(function ($property) {
            if (!empty($property->images)) {
                $images = json_decode($property->images);
                if (is_array($images) && !empty($images)) {
                    // Ajoute une propriété 'image' avec l'URL de la première image.
                    $property->image = asset('storage/' . $images[0]);
                    // Remplace la chaîne JSON 'images' par un tableau d'URLs complètes.
                    $property->images = array_map(fn($img) => asset('storage/' . $img), $images);
                } else {
                    $property->image = null;
                    $property->images = [];
                }
            }
            return $property;
        });
        return Inertia::render("Welcome", [
            'properties' => $properties,
            'image' => $properties->first() ? $properties->first()->image : null,
        ]);
    }

    public function filterProperties(Request $request)

    {
        $location = $request->input('location');
        $locality = $request->input('locality');

        $query = DB::table('loyers');

        if ($location) {
            $query->where('location', $location);
        }

        if ($locality) {
            $query->where('locality', $locality);
        }

        $properties = $query->get()->map(function ($property) {
            if (!empty($property->images)) {
                $images = json_decode($property->images);
                if (is_array($images) && !empty($images)) {
                    // Ajoute une propriété 'image' avec l'URL de la première image.
                    $property->image = asset('storage/' . $images[0]);
                    // Remplace la chaîne JSON 'images' par un tableau d'URLs complètes.
                    $property->images = array_map(fn($img) => asset('storage/' . $img), $images);
                } else {
                    $property->image = null;
                    $property->images = [];
                }
            }
            return $property;
        });

        return Inertia::render("Home/FilterLocations", [
            'properties' => $properties,
            'image' => $properties->first() ? $properties->first()->image : null,
        ]);
    }

    /**
     * Affiche une liste filtrée des propriétés.
     * C'est la méthode qui reçoit la recherche du formulaire sur la page d'accueil
     * et les clics sur les catégories de "Locations".
     */
    public function filtredProperties(Request $request)
    {
        // On commence par ne prendre que les propriétés disponibles
        $query = Properties::query()->whereIn('status', ['A Louer', 'A Vendre']);

        // Applique les filtres de la requête
        if ($request->filled('location')) {
            $query->where('location', $request->input('location'));
        }

        if ($request->filled('locality')) {
            $query->where('locality', $request->input('locality'));
        }

        // Filtre par type (utilisé par Locations.jsx et le formulaire de recherche)
        if ($request->filled('type')) {
            $query->where('type', $request->input('type'));
        }

        if ($request->filled('price')) {
            $priceValue = (int) $request->input('price');
            if ($priceValue === 10) {
                $query->whereBetween('price', [10, 49999]);
            } elseif ($priceValue === 50000) {
                $query->whereBetween('price', [50000, 99999]);
            } elseif ($priceValue === 100000) {
                $query->whereBetween('price', [100000, 149999]);
            } elseif ($priceValue === 150000) {
                $query->where('price', '>=', 150000);
            }
        }

        // On récupère les propriétés filtrées, avec pagination
        $properties = $query->latest()->paginate(9)->withQueryString();

        // On retourne la vue Inertia avec les propriétés et les filtres actuels
        return Inertia::render('Properties/Index', [
            'properties' => $properties,
            'filters' => $request->only(['location', 'locality', 'type', 'price']),
        ]);
    }

    /**
     * Filtre les propriétés par type.
     * @param  \Illuminate\Http\Request  $request
     * @param  string  $slug
     * @return \Inertia\Response
     */
    public function filterByType(Request $request, string $slug)
    {
        $properties = DB::table('loyers')
            ->where('slug', $slug)
            ->get()
            ->map(function ($property) {
                if (!empty($property->images)) {
                    $images = json_decode($property->images);
                    if (is_array($images) && !empty($images)) {
                        // Ajoute une propriété 'image' avec l'URL de la première image.
                        $property->image = asset('storage/' . $images[0]);
                        // Remplace la chaîne JSON 'images' par un tableau d'URLs complètes.
                        $property->images = array_map(fn($img) => asset('storage/' . $img), $images);
                    } else {
                        $property->image = null;
                        $property->images = [];
                    }
                }
                return $property;
            });

        // On retourne la vue Inertia avec les propriétés filtrées
        return Inertia::render('Home/LocationSlug', [
            'properties' => $properties,
            'filters' => ['slug' => $slug], // Passe le type comme filtre actuel
        ]);
    }

}
