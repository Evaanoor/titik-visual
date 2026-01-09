$pattern = "import\s+['\"]\.\/[^'\"]+\.css['\"];?\s*`n?"
$files = Get-ChildItem "c:\laragon\www\titik-visual\clients\src\components\*.jsx"

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $newContent = $content -replace $pattern, ""
    if ($newContent -ne $content) {
        Set-Content $file.FullName $newContent
        Write-Host "Fixed: $($file.Name)"
    }
}

Write-Host "Done!"
