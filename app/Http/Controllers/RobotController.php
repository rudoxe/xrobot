<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Robot;
use Inertia\Inertia;

class RobotController extends Controller
{
    // Display the robots
    public function index()
    {
        $robots = Robot::all();

        return Inertia::render('CCentre', [
            'initialRobots' => $robots
        ]);
    }

    // Store a new robot
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'task' => 'required|string|max:255',
            'power_level' => 'required|integer|min:0|max:100',
        ]);

        $robot = Robot::create($validated);

        // Respond with the newly created robot
        return redirect()->back()->with('robot', $robot);
    }
}
