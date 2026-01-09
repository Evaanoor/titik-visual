<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AppSettingsSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('app_settings')->updateOrInsert(
            ['key' => 'whatsapp_phone'],
            ['value' => '6281804376001', 'type' => 'string', 'created_at' => now(), 'updated_at' => now()]
        );
    }
}
