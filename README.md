# StageOpdr

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Node server

Open a new terminal and open the api folder `cd api`. When you opened the folder run `nodemon .` to start the server on `http://localhost:3000/`

## SQL code for database

```
-- Maak de database aan als deze nog niet bestaat
CREATE DATABASE IF NOT EXISTS todolist;

-- Gebruik de aangemaakte database
USE todolist;

-- Maak de tabel `categorieen` aan
CREATE TABLE IF NOT EXISTS categorieen (
    id int(11) NOT NULL AUTO_INCREMENT,
    categorie varchar(100) NOT NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Voeg gegevens toe aan de `categorieen` tabel
INSERT INTO categorieen (categorie) VALUES
( 'tuin'),
( 'huis'),
( 'kantoor');

-- Maak de tabel `list` aan
CREATE TABLE IF NOT EXISTS list (
    id int(11) NOT NULL AUTO_INCREMENT,
    task varchar(500) NOT NULL,
    categorie_id int(11) NOT NULL,
    checked tinyint(1) NOT NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Voeg gegevens toe aan de `list` tabel
INSERT INTO list (task, categorie_id, checked) VALUES
( 'Taak 1', 1, 0),
( 'Taak 2', 1, 1),
( 'Taak 3', 2, 0),
( 'Taak 4', 3, 0),
( 'Taak 5', 2, 1),
( 'Taak 6', 1, 0),
( 'Taak 7', 3, 1),
( 'Taak 8', 2, 0),
( 'Taak 9', 1, 1),
( 'Taak 10', 3, 0);
```

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
