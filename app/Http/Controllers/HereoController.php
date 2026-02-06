<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HereoController extends Controller
{
    public function index() {
        return Inertia::render('Hereo', [
            'Slides' => [
                ['id' => 1, 'title' => 'Modern Luxury Penthouse', 'url' => '/images/hero1.jpg', 'color' => '#1a1a2e'],
                ['id' => 2, 'title' => 'Waterfront Villa Estate', 'url' => '/images/hero2.jpg', 'color' => '#1e3a5f'],
                ['id' => 3, 'title' => 'Chic Brooklyn Townhouse', 'url' => '/images/hero3.jpg', 'color' => '#3d2914'],
            ]
        ]);
    }
}
