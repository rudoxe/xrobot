<?php

// app/Http/Controllers/RobotController.php

namespace App\Http\Controllers;

use App\Models\Robot;
use Illuminate\Http\Request;

class RobotController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin'); // Ensure only admins can access this controller
    }

    // Display a list of robots
    public function index()
    {
        $robots = Robot::all();
        return response()->json($robots);
    }

    // Show the form for creating a new robot (optional for API, useful if you're using forms)
    public function create()
    {
        // This could return a view if necessary
    }

    // Store a newly created robot
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'task' => 'required|string|max:255',
            'power_level' => 'required|integer|between:0,100',
        ]);

        $robot = Robot::create($validated);
        return response()->json($robot, 201);
    }

    // Display the specified robot (view details)
    public function show($id)
    {
        $robot = Robot::findOrFail($id);
        return response()->json($robot);
    }

    // Show the form for editing the specified robot
    public function edit($id)
    {
        // Similar to the create method if using Blade views
    }

    // Update the specified robot
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'task' => 'required|string|max:255',
            'power_level' => 'required|integer|between:0,100',
        ]);

        $robot = Robot::findOrFail($id);
        $robot->update($validated);

        return response()->json($robot);
    }

    // Remove the specified robot
    public function destroy($id)
    {
        $robot = Robot::findOrFail($id);
        $robot->delete();

        return response()->json(['message' => 'Robot deleted successfully']);
    }
}
