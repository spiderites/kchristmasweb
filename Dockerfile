# Use official Deno image
FROM denoland/deno:alpine-1.39.0

# Set working directory
WORKDIR /app

# Copy all project files
COPY . .

# Build the Fresh app
RUN deno task build
RUN deno cache _fresh/server.js

# Expose the port (optional, just documentation)
EXPOSE 8000

# Start the app using Render's PORT environment variable
CMD ["sh", "-c", "deno run --allow-net --allow-read _fresh/server.js --port ${PORT}"]
