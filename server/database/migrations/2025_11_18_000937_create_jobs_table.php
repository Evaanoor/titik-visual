<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('jobs', function (Blueprint $table) {
            $table->id();
            $table->string('title'); // "UI/UX Designer", "Full Stack Developer"
            $table->text('description'); // Deskripsi pekerjaan
            $table->string('category'); // "Design", "Programming", "Marketing"
            $table->string('type'); // "Magang", "Full-time", "Contract"

            $table->string('level')->nullable(); // "Beginner", "Intermediate" (utk magang)
            $table->string('duration')->nullable(); // "3-6 bulan"
            $table->string('posted_at')->nullable(); // "2 hari lalu"
            $table->string('location')->nullable(); // "Yogyakarta"
            $table->string('salary')->nullable(); // "Rp 8-12 juta"
            $table->string('experience')->nullable(); // "3+ tahun"
            $table->json('requirements'); // ["Mahasiswa Desain", "Menguasai Figma"]
            $table->json('benefits'); // ["Sertifikat", "Uang saku"]
            $table->json('responsibilities')->nullable(); // (utk lowongan kerja)

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jobs');
    }
};
