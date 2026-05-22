# Cleanup Script for Vercel Deployment
# This script removes unnecessary files before deploying to Vercel

Write-Host "🧹 Starting cleanup process..." -ForegroundColor Cyan

# Get the current directory (should be the virtuo folder)
$projectRoot = Get-Location

Write-Host "`n📁 Current location: $projectRoot" -ForegroundColor Yellow

# Files and folders to remove from the virtuo folder
$itemsToRemove = @(
    ".env.example",
    "Chat.disabled.tsx"
)

# Remove items
foreach ($item in $itemsToRemove) {
    $fullPath = Join-Path $projectRoot $item
    if (Test-Path $fullPath) {
        Remove-Item $fullPath -Recurse -Force
        Write-Host "✅ Removed: $item" -ForegroundColor Green
    } else {
        Write-Host "⏭️  Not found (already clean): $item" -ForegroundColor Gray
    }
}

Write-Host "`n🗑️  Cleaning build artifacts..." -ForegroundColor Cyan

# Clean build artifacts
$buildFolders = @("dist", "node_modules/.cache", ".vercel")
foreach ($folder in $buildFolders) {
    $fullPath = Join-Path $projectRoot $folder
    if (Test-Path $fullPath) {
        Remove-Item $fullPath -Recurse -Force
        Write-Host "✅ Removed: $folder" -ForegroundColor Green
    }
}

Write-Host "`n📊 Checking file sizes..." -ForegroundColor Cyan

# Check for large files
$largeFiles = Get-ChildItem -Path $projectRoot -Recurse -File | 
    Where-Object { $_.Length -gt 1MB -and $_.Extension -ne '.lock' } |
    Select-Object FullName, @{Name="Size (MB)";Expression={[math]::Round($_.Length / 1MB, 2)}} |
    Sort-Object "Size (MB)" -Descending

if ($largeFiles.Count -gt 0) {
    Write-Host "`n⚠️  Large files found (review these):" -ForegroundColor Yellow
    $largeFiles | Format-Table -AutoSize
} else {
    Write-Host "✅ No unusually large files found" -ForegroundColor Green
}

Write-Host "`n✨ Cleanup complete!" -ForegroundColor Green
Write-Host "`n📝 Next steps:" -ForegroundColor Cyan
Write-Host "  1. Review and delete parent template folders manually:"
Write-Host "     - virtuo-personal-portfolio-html-template-1.0.2/" -ForegroundColor Yellow
Write-Host "     - virtuo-personal-portfolio-nextjs-template-1.0.2/" -ForegroundColor Yellow
Write-Host "     - virtuo-personalportfolio-reactjs-template/documentation/" -ForegroundColor Yellow
Write-Host "  2. Run 'npm run build' to test the build"
Write-Host "  3. Deploy with 'vercel' or push to GitHub"
Write-Host ""
