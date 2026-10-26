#!/usr/bin/env python3
"""
KI-Kompetenz Campus - Lokaler Webserver
Startet einen HTTP-Server mit Unterstützung für Video-Streaming (Range-Requests) und öffnet die App im Standard-Browser.
"""

import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # Enable CORS and disable caching during development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

def main():
    os.chdir(DIRECTORY)
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        url = f"http://localhost:{PORT}/index.html"
        print(f"==================================================")
        print(f"  KI-KOMPETENZ CAMPUS - WEB APPLICATION")
        print(f"==================================================")
        print(f"  Server laeuft unter: {url}")
        print(f"  Druecke Strg + C zum Beenden des Servers.")
        print(f"==================================================")
        webbrowser.open(url)
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer wird heruntergefahren...")
            httpd.server_close()

if __name__ == "__main__":
    main()
