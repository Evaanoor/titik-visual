<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Admin Titik Visual',
            'email' => 'admin@titikvisual.com', // Email untuk login
            'password' => Hash::make('password123'), // Password (ganti jika mau)
        ]);
    }
}
