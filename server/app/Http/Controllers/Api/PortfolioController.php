<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Portfolio;
use Illuminate\Support\Facades\Storage;

class PortfolioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $portfolios = Portfolio::all();
        return response()->json($portfolios);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validasi input
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'client' => 'required|string|max:255',
            'description' => 'required|string',
            'tag' => 'required|string|max:255',
            'year' => 'required|string|max:4',
            'tags' => 'required|string', // JSON string
            'is_featured' => 'required|boolean',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        // Upload gambar
        $imagePath = $request->file('image')->store('portfolios', 'public');

        // Simpan ke database
        $portfolio = Portfolio::create([
            'title' => $validated['title'],
            'client' => $validated['client'],
            'description' => $validated['description'],
            'tag' => $validated['tag'],
            'year' => $validated['year'],
            'tags' => $validated['tags'], // Simpan JSON string langsung
            'is_featured' => $validated['is_featured'],
            'image' => $imagePath,
        ]);

        return response()->json([
            'message' => 'Portfolio berhasil ditambahkan',
            'data' => $portfolio
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $portfolio = Portfolio::findOrFail($id);
        return response()->json($portfolio);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $portfolio = Portfolio::findOrFail($id);

        // Validasi input
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'client' => 'required|string|max:255',
            'description' => 'required|string',
            'tag' => 'required|string|max:255',
            'year' => 'required|string|max:4',
            'tags' => 'required|string',
            'is_featured' => 'required|boolean',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        // Update gambar jika ada upload baru
        if ($request->hasFile('image')) {
            // Hapus gambar lama
            if ($portfolio->image && Storage::disk('public')->exists($portfolio->image)) {
                Storage::disk('public')->delete($portfolio->image);
            }
            // Upload gambar baru
            $imagePath = $request->file('image')->store('portfolios', 'public');
            $portfolio->image = $imagePath;
        }

        // Update data lain
        $portfolio->update([
            'title' => $validated['title'],
            'client' => $validated['client'],
            'description' => $validated['description'],
            'tag' => $validated['tag'],
            'year' => $validated['year'],
            'tags' => $validated['tags'],
            'is_featured' => $validated['is_featured'],
        ]);

        return response()->json([
            'message' => 'Portfolio berhasil diupdate',
            'data' => $portfolio
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $portfolio = Portfolio::findOrFail($id);

        // Hapus gambar dari storage
        if ($portfolio->image && Storage::disk('public')->exists($portfolio->image)) {
            Storage::disk('public')->delete($portfolio->image);
        }

        // Hapus data dari database
        $portfolio->delete();

        return response()->json([
            'message' => 'Portfolio berhasil dihapus'
        ]);
    }
}
