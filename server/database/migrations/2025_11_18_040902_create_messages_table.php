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
        Schema::create('messages', function (Blueprint $table) {
            $table->id();
            $table->string('nama');
            $table->string('email');
            $table->string('whatsapp');
            $table->string('perusahaan')->nullable(); // Boleh kosong
            $table->string('layanan');
            $table->string('timeline')->nullable(); // Boleh kosong
            $table->string('budget')->nullable(); // Boleh kosong
            $table->text('detail'); // Pakai 'text' untuk pesan yang panjang
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('messages');
    }
};
