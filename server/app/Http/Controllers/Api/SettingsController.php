<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\AppSetting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SettingsController extends Controller
{
    // GET /api/settings/{key}
    public function show($key)
    {
        $value = AppSetting::getValue($key, null);
        return response()->json(['key' => $key, 'value' => $value]);
    }

    // POST /api/settings/{key}
    public function update(Request $request, $key)
    {
        // hanya user yang ter-auth via sanctum bisa mengakses (middleware di routes)

        $validator = Validator::make($request->all(), [
            'value' => ['required', 'string', 'max:1000'],
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $value = $request->input('value');

        // Normalisasi sederhana untuk nomor telepon: hapus karakter non-digit dan jika diawali 0 ubah ke 62
        $clean = preg_replace('/[^0-9+]/', '', $value);
        if (preg_match('/^0/', $clean)) {
            $clean = '62' . preg_replace('/^0+/', '', $clean);
        }

        $setting = AppSetting::updateOrCreate(['key' => $key], ['value' => $clean]);

        return response()->json(['key' => $key, 'value' => $setting->value]);
    }
}
