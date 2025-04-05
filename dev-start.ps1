# Kill any existing processes
taskkill /F /IM node.exe /IM electron.exe 2>$null
Get-Process python | Where-Object { $_.MainWindowTitle -eq "" } | Stop-Process -Force 2>$null

# Start the FastAPI backend
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PSScriptRoot\backend'; python main.py"

# Wait a moment for the backend to start
Start-Sleep -Seconds 2

# Start the Electron app
npm run electron:dev
