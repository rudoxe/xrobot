<?php

namespace App\Http\Controllers;

use App\Models\Robot;
use Inertia\Inertia;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    // Store the robot in the database
    public function store(Request $request)
    {
        // Validate incoming data
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'task' => 'required|string|max:255',
            'power_level' => 'required|integer|min:0|max:100',
        ]);

        // Create the robot
        $robot = Robot::create($validated);

        // Redirect with an Inertia response, passing the new robot data
        return redirect()->route('robots.index') // or the route where robots are listed
                         ->with('robot', $robot) // Passing robot data as flash session
                         ->with('success', 'Robot created successfully.');
    }
}


