#!/data/data/com.termux/files/usr/bin/bash
echo "Copying kchristmasweb from Documents to Termux home..."
cp -r ~/storage/downloads/kchristmasweb "$HOME/"

# 2️⃣ Enter the project folder
cd "$HOME/kchristmasweb" || { 
    echo "Failed to enter project folder"; 
    exit 1
}

# 4️⃣ Run dev server
echo "Starting dev server..."
deno task dev