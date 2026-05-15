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

