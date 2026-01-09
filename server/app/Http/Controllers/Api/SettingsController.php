<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\AppSetting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SettingsController extends Controller
{
    public function show($key)
    {
        $value = AppSetting::getValue($key, null);
        return response()->json(['key' => $key, 'value' => $value]);
    }

    public function update(Request $request, $key)
    {
        
        $validator = Validator::make($request->all(), [
            'value' => ['required', 'string', 'max:1000'],
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $value = $request->input('value');

        $clean = preg_replace('/[^0-9+]/', '', $value);
        if (preg_match('/^0/', $clean)) {
            $clean = '62' . preg_replace('/^0+/', '', $clean);
        }

        $setting = AppSetting::updateOrCreate(['key' => $key], ['value' => $clean]);

        return response()->json(['key' => $key, 'value' => $setting->value]);
    }
}
