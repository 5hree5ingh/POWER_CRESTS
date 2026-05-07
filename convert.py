import re

with open('screen.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract the tailwind config
config_match = re.search(r'<script id="tailwind-config">(.*?)</script>', content, re.DOTALL)
config_js = config_match.group(1) if config_match else ""

# Extract the body
body_match = re.search(r'<body[^>]*>(.*?)</body>', content, re.DOTALL)
body_html = body_match.group(1) if body_match else ""

# Extract body classes
body_class_match = re.search(r'<body class="([^"]+)"', content)
body_classes = body_class_match.group(1) if body_class_match else ""

# Convert class to className
body_jsx = body_html.replace('class="', 'className="')

# Convert HTML comments to JSX comments
body_jsx = re.sub(r'<!--(.*?)-->', r'{/*\1*/}', body_jsx)

app_jsx = f"""import React from 'react';

function App() {{
  return (
    <div className="{body_classes}">
      {body_jsx}
    </div>
  );
}}

export default App;
"""

with open('src/App.jsx', 'w', encoding='utf-8') as f:
    f.write(app_jsx)

index_html = f"""<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CHEM-SHIELD HDPE | Industrial Container Solutions</title>
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
    <script id="tailwind-config">
{config_js}
    </script>
    <style>
        .material-symbols-outlined {{
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }}
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
"""

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(index_html)
