<?php

namespace App\Http\Controllers;

use App\Models\Salle;
use Illuminate\Http\Request;

class RoomController extends Controller
{
    public function index()
    {
        $salles = Salle::all();
        return response()->json(['data' => $salles]);
    }

    public function show($id)
    {
        $salle = Salle::findOrFail($id);
        return response()->json(['data' => $salle]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nom' => 'required|string|max:255',
            'type' => 'required|string|max:255',
            'capacite' => 'required|integer|min:1',
            'description' => 'required|string',
            'equipements' => 'array',
            'image' => 'nullable|string',
        ]);

        $salle = Salle::create($validated);
        return response()->json(['data' => $salle], 201);
    }

    public function update(Request $request, $id)
    {
        $salle = Salle::findOrFail($id);

        $validated = $request->validate([
            'nom' => 'sometimes|required|string|max:255',
            'type' => 'sometimes|required|string|max:255',
            'capacite' => 'sometimes|required|integer|min:1',
            'description' => 'sometimes|required|string',
            'equipements' => 'sometimes|array',
            'image' => 'nullable|string',
        ]);

        $salle->update($validated);
        return response()->json(['data' => $salle]);
    }

    public function destroy($id)
    {
        $salle = Salle::findOrFail($id);
        $salle->delete();
        return response()->json(null, 204);
    }
} 