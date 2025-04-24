@echo off
cd /d %~dp0
start http://localhost:8000/home.html
python -m https.server 8000
pause