#!/data/data/com.termux/files/usr/bin/bash

echo "Syncing kchristmasweb from Downloads to Termux home..."

# Use rsync instead of cp for incremental copy
rsync -avu ~/storage/downloads/kchristmasweb/ "$HOME/kchristmasweb/"

# Enter the project folder
cd "$HOME/kchristmasweb" || { 
    echo "Failed to enter project folder"; 
    exit 1
}

# Run dev server
echo "Starting dev server..."
deno task dev