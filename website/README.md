Email sending option for contact page

This repository now includes a simple Node.js email endpoint that accepts POST /send-email and forwards messages using SMTP.

Setup (local):

1. Navigate to the `server` folder and copy `.env.example` to `.env` and fill in SMTP details.

```bash
cd server
npm install
# copy .env.example to .env and edit
npm start
```

2. Run the website (open the HTML files in a browser). The contact form will POST to `http://localhost:3000/send-email` if you run the server on the same machine and port.

Notes:
- For production, deploy the `server` to a secure host and set environment variables. Do NOT commit credentials.
- The contact form now sends messages only via the server endpoint (`/send-email`). If the server is not running or reachable, the form will display an error — it will no longer open the user's mail client.

Deployment options
------------------

1) Docker (recommended if you can run containers)

Build and run the container from the `server` folder:

```bash
cd server
docker build -t aayan-email-server .
docker run -p 3000:3000 --env-file .env aayan-email-server
```

The container will listen on port 3000 by default.

2) Render (quick deploy)

- Create a new Web Service on Render and connect your GitHub repo.
- Set the `root` or the build command to use the `server` folder as the service root (or create a separate git repo for the `server`).
- Add environment variables from `.env` in the Render dashboard.

3) Heroku (Node app or container)

Heroku (Node):

- Create an app and set the buildpack to Node.js. Push the `server` folder as the repo root or push a repo whose root is the `server` folder.
- Ensure a `Procfile` exists (provided) and set environment variables in the Heroku dashboard.

Heroku (container):

- Use the provided `Dockerfile`, build and push the image with the Heroku container registry, then release.

Security & notes
- Do not commit `.env` — use the hosting provider's environment settings.
- Consider adding rate-limiting or CAPTCHA to the `/send-email` endpoint before public deployment to avoid spam.
