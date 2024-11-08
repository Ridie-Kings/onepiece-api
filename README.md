
# One Piece API

An API to retrieve detailed information about characters, crews, devil fruits, abilities, and more from the world of One Piece. This API is built with **Express** in **Node.js** and features a **React** frontend.

## API Routes

### `/characters`
- **Description**: Retrieves a list of all characters from One Piece.
- **Method**: GET

### `/characters/:id`
- **Description**: Retrieves detailed information of a specific character by their id.
- **Example**: `/characters/1`
- **Method**: GET

### `/crews`
- **Description**: Retrieves a list of different pirate crews and Marine corps.
- **Method**: GET

### `/crews/:id`
- **Description**: Retrieves information of a specific crew by its ID.
- **Example**: `/crews/1`
- **Method**: GET

### `/races`
- **Description**: Retrieves a list of all character races.
- **Example**: Human, Gyojin, Mink, Giant.
- **Method**: GET

### `/devil-fruits`
- **Description**: Retrieves a list of all devil fruits.
- **Method**: GET

### `/devil-fruits/:id`
- **Description**: Retrieves information of a specific devil fruit by its ID.
- **Example**: `/devil-fruits/3`
- **Method**: GET

### `/devil-fruits/types`
- **Description**: Retrieves a list of all devil fruit types.
- **Example**: Paramecia, Zoan, Logia.
- **Method**: GET

### `/hakis`
- **Description**: Retrieves a list of all abilities and haki types.
- **Method**: GET

### `/hakis/:id`
- **Description**: Retrieves details of a specific ability by its ID.
- **Example**: `/hakis/1` (Conqueror’s Haki, Armament Haki, Observation Haki).
- **Method**: GET

### `/origins`
- **Description**: Retrieves a list of all character origins.
- **Example**: East Blue, Grand Line.
- **Method**: GET

### `/origins/:id`
- **Description**: Retrieves details of a specific origin place by its ID.
- **Example**: `/origins/4`
- **Method**: GET


## Technologies
- **Backend**: Node.js, Express
- **Frontend**: React

## Installation

### Prerequisites

1. **Node.js** (version 14 or higher)
2. **npm** (Node package manager)

### Steps to run the project

1. Clone the repository:

```bash
git clone https://github.com/Ridie-Kings/onepiece-api.git
```

2. Go into the project directory:

```bash
cd onepiece-api
```

3. Install dependencies:

```bash
npm install
```

4. Start the server:

```bash
npm start
```

5. Open the frontend in a browser:

```bash
npm run dev
```

## Contribution
If you'd like to contribute to the project, please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature/my-new-feature`
3. Make necessary changes.
4. Commit your changes with a clear message: `git commit -m "Added new feature"`
5. Push the changes: `git push origin feature/my-new-feature`
6. Open a Pull Request for review.

## Authors

- **Fran Salvatierra** - *Lead Developer* - [Ridie-Kings](https://github.com/Ridie-Kings)
- **Juanan** - *Backend Developer* - [juanandub](https://github.com/juanandub)

See also the list of [contributors](https://github.com/Ridie-Kings/onepiece-api/contributors) who participated in this project.


## License
This project is licensed under the [MIT License](LICENSE).
