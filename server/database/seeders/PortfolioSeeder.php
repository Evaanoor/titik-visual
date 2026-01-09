<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Portfolio; // <-- 1. IMPORT MODEL KITA
use Illuminate\Support\Facades\DB; // (Opsional, tapi bagus untuk 'truncate')

class PortfolioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // 2. Kosongkan tabelnya dulu agar tidak duplikat
        DB::table('portfolios')->truncate();

        // 3. Siapkan data (sesuai 12 kartu di frontend)
        $portfolios = [
            // --- BARIS 1 (Featured) ---
            [
                'title' => 'E-Commerce Mobile App',
                'client' => 'ShopNow Indonesia',
                'description' => 'Complete mobile app design untuk platform e-commerce...',
                'image' => 'portfolios/portofolio-project.png', //INI DIGANTI YAAA NNTI SESUAI NAMA FILE
                'tag' => 'UI/UX Design',
                'year' => '2024',
                'tags' => json_encode(['Mobile', 'E-commerce', 'iOS']),
                'is_featured' => true,
            ],
            [
                'title' => 'SaaS Dashboard Design',
                'client' => 'DataFlow Solutions',
                'description' => 'Dashboard design untuk SaaS platform dengan data visualization...',
                'image' => 'portfolios/portofolio-project.png',
                'tag' => 'UI/UX Design',
                'year' => '2024',
                'tags' => json_encode(['Web App', 'Dashboard', 'SaaS']),
                'is_featured' => true,
            ],
            [
                'title' => 'Banking Mobile App',
                'client' => 'SecureBank Digital',
                'description' => 'Secure dan user-friendly banking app dengan modern interface...',
                'image' => 'portfolios/portofolio-project.png',
                'tag' => 'Mobile App',
                'year' => '2023',
                'tags' => json_encode(['Mobile App', 'Banking', 'Security']),
                'is_featured' => false,
            ],
            // --- BARIS 2 ---
            [
                'title' => 'E-Commerce Mobile App', // (Ini duplikat sesuai desain)
                'client' => 'ShopNow Indonesia',
                'description' => 'Complete mobile app design untuk platform e-commerce...',
                'image' => 'portfolios/portofolio-project.png',
                'tag' => 'UI/UX Design',
                'year' => '2024',
                'tags' => json_encode(['Mobile', 'E-commerce', 'iOS']),
                'is_featured' => true,
            ],
            [
                'title' => 'SaaS Dashboard Design', // (Ini duplikat sesuai desain)
                'client' => 'DataFlow Solutions',
                'description' => 'Dashboard design untuk SaaS platform dengan data visualization...',
                'image' => 'portfolios/portofolio-project.png',
                'tag' => 'UI/UX Design',
                'year' => '2024',
                'tags' => json_encode(['Web App', 'Dashboard', 'SaaS']),
                'is_featured' => true,
            ],
            [
                'title' => 'Corporate Website',
                'client' => 'PT. Maju Bersama',
                'description' => 'Website corporate yang modern dan profesional dengan CMS...',
                'image' => 'portfolios/portofolio-project.png',
                'tag' => 'Web Development',
                'year' => '2024',
                'tags' => json_encode(['Web App', 'Corporate', 'Responsive']),
                'is_featured' => false,
            ],
            // --- BARIS 3 ---
            [
                'title' => 'Banking Mobile App', // (Ini duplikat sesuai desain)
                'client' => 'SecureBank Digital',
                'description' => 'Secure dan user-friendly banking app dengan modern interface...',
                'image' => 'portfolios/portofolio-project.png',
                'tag' => 'Mobile App',
                'year' => '2023',
                'tags' => json_encode(['Mobile App', 'Banking', 'Security']),
                'is_featured' => false,
            ],
            [
                'title' => 'Brand Identity Package',
                'client' => 'GreenTech Startup',
                'description' => 'Complete brand identity package termasuk logo, color palette...',
                'image' => 'portfolios/portofolio-project.png',
                'tag' => 'Branding',
                'year' => '2024',
                'tags' => json_encode(['Logo', 'Brand Identity', 'Guidelines']),
                'is_featured' => false,
            ],
            [
                'title' => 'Social Media Campaign',
                'client' => 'Fashion Brand Co',
                'description' => 'Social media campaign design untuk fashion brand...',
                'image' => 'portfolios/portofolio-project.png',
                'tag' => 'Social Media',
                'year' => '2024',
                'tags' => json_encode(['Social Media', 'Campaign', 'Instagram']),
                'is_featured' => false,
            ],
            // --- BARIS 4 ---
            [
                'title' => 'Restaurant Website',
                'client' => 'Rasa Nusantara',
                'description' => 'Website restaurant dengan online menu, table booking system...',
                'image' => 'portfolios/portofolio-project.png',
                'tag' => 'Web Development',
                'year' => '2023',
                'tags' => json_encode(['Website', 'Restaurant', 'Online Menu']),
                'is_featured' => false,
            ],
            [
                'title' => 'Fitness App UI/UX',
                'client' => 'FitLife App',
                'description' => 'Fitness tracking app dengan motivational design...',
                'image' => 'portfolios/portofolio-project.png',
                'tag' => 'UI/UX Design',
                'year' => '2024',
                'tags' => json_encode(['Mobile', 'Fitness', 'Health']),
                'is_featured' => true,
            ],
            [
                'title' => 'E-Learning Platform',
                'client' => 'EduTech Indonesia',
                'description' => 'E-learning platform dengan interactive course content...',
                'image' => 'portfolios/portofolio-project.png',
                'tag' => 'Web Development',
                'year' => '2023',
                'tags' => json_encode(['Web App', 'Education', 'LMS']),
                'is_featured' => false,
            ],
        ];

        Portfolio::insert($portfolios);

    }
}