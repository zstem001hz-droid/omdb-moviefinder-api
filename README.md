# 🎬 🎥 🍿 OMDB Movie Finder API 📽️

A RESTful Express.js API built as a proxy for the OMDb API.

---

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **HTTP Client:** Axios
- **Configuration:** dotenv
- **Dev Tools:** Nodemon

---

## What It Does

Acts as a secure intermediary between a client and the OMDb API. The server handles incoming requests, securely attaches the API key, fetches movie data, and returns clean JSON responses to the client.

---

## Getting Started

### Prerequisites

- Node.js v20+
- npm
- OMDb API Key ([Get one free here](http://www.omdbapi.com/apikey.aspx))

### Installation

```bash
git clone <your-repo-url>
cd omdb-moviefinder-api
npm install
```

### Configuration

Create a `.env` file in the root directory:

```
OMDB_API_KEY=your_key_here
PORT=3001
```

### Running the Server

```bash
nodemon server.js
```

---

## File Structure

```
omdb-moviefinder-api/
├── controllers/
│   └── movieController.js
├── routes/
│   └── movieRoutes.js
├── .env
├── .env.example
├── .gitignore
├── package.json
├── README.md
└── server.js
```

---

## Routes

| Method | Path              | Description                  |
| :----- | :---------------- | :--------------------------- |
| GET    | `/api/search`     | Search movies by title       |
| GET    | `/api/movies/:id` | Get movie details by IMDb ID |

### Usage Examples

**Search:**

```
http://localhost:3001/api/search?title=Adaptation
```

**Movie Details:**

```
http://localhost:3001/api/movies/tt0268126
```

---

## RESTful Principles

This API follows REST architectural constraints:

- **Stateless** — every request contains all information needed to fulfill it
- **Resource-based URLs** — endpoints use nouns, not verbs
- **Standard HTTP methods** — GET for data retrieval
- **JSON responses** — consistent data format for all endpoints

---

## Testing

Endpoints were tested using Postman and the browser.

### Search
`GET http://localhost:3001/api/search?title=Adaptation`

Returns a list of all movies containing "Adaptation" in the title — including the 2002 Nicolas Cage film. This highlights an important characteristic of the OMDb `s` parameter: it performs a broad search, not an exact match. A future enhancement could add additional filtering to narrow results.

### Movie Details
`GET http://localhost:3001/api/movies/tt0268126`

Returns full details for *Adaptation* (2002) using its specific IMDb ID — a precise lookup that returns exactly one result.

### Validation
`GET http://localhost:3001/api/search`

Returns `400 Bad Request` with `{ "error": "Title query parameter is required" }` when no title is provided.

## Reflections

**1. Why is it important to use a server as a proxy for external API calls rather than calling the API directly from the browser?**

Calling the API directly from the browser would expose your API key to anyone who inspects the network tab in DevTools. By routing requests through the server, the API key stays hidden in `.env` and never reaches the client.

**2. How does the routes/controllers separation improve the maintainability of the codebase?**

Routes only define what path and HTTP method trigger an action. Controllers contain the actual logic. This means you can update business logic without touching the routing layer, and vice versa — making the code easier to debug, test, and scale.

**3. What would happen if the `.env` file was accidentally committed to GitHub with a real API key inside it?**

The key would be publicly exposed. Anyone could find it, use your API quota, or if it's a paid service, rack up charges on your account. GitHub also scans for exposed keys and notifies API providers who may revoke the key automatically.
