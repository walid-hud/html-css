# ----------------------
# Challenge folder names
# ----------------------
$challenges = @{
    "card.html"             = "01-center-card"
    "profile.html"          = "02-profile-card"
    "pricing-table.html"    = "03-pricing-table"
    "responsive-navbar.html"= "04-responsive-navbar"
    "gallery.html"          = "05-photo-gallery"
    "img-gallery.js"        = "05-photo-gallery"
    "form.html"             = "06-login-form"
    "form-design.webp"      = "06-login-form"
    "loader.html"           = "07-loader-animation"
    "hero-section.html"     = "08-hero-section"
    "bg.webp"               = "08-hero-section"
    "index.css"             = "10-dark-light-mode"
    "index.js"              = "10-dark-light-mode"
}

# ----------------------
# Create challenge folders
# ----------------------
$allFolders = $challenges.Values | Select-Object -Unique
foreach ($folder in $allFolders) {
    if (-not (Test-Path $folder)) {
        New-Item -ItemType Directory -Path $folder | Out-Null
    }
}

# ----------------------
# Move main files
# ----------------------
foreach ($file in Get-ChildItem -File) {
    if ($challenges.ContainsKey($file.Name)) {
        $target = $challenges[$file.Name]
        Move-Item $file.FullName "$target/$($file.Name)"
    }
}

# ----------------------
# Move special folder: menu/
# (belongs to responsive navbar)
# ----------------------
if (Test-Path "menu") {
    $target = "04-responsive-navbar/menu"
    if (-not (Test-Path $target)) { New-Item -ItemType Directory -Path $target | Out-Null }
    Move-Item "menu/*" $target -Force
    Remove-Item "menu" -Force
}

# ----------------------
# Create Unsorted folder
# ----------------------
if (-not (Test-Path "Unsorted")) {
    New-Item -ItemType Directory -Path "Unsorted" | Out-Null
}

# ----------------------
# Move remaining loose files into Unsorted
# ----------------------
foreach ($item in Get-ChildItem) {
    if ($item.Name -notin $allFolders -and $item.Name -ne "Unsorted") {
        Move-Item $item.FullName "Unsorted/$($item.Name)" -Force
    }
}

Write-Host "Organization complete!"
