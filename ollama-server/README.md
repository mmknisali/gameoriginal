# Ollama Server on Render.com

This is a simple Node.js app that runs Ollama for AI prompts.

## Setup
1. Create a Render.com account.
2. Create a new Web Service.
3. Connect your GitHub repo or deploy from source.
4. Set environment variable: `OLLAMA_MODEL=llama3.2:3b`
5. Deploy.

## Usage
The app exposes Ollama API at the service URL + /api/generate.