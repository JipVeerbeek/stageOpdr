# StageOpdr

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Node server

Open a new terminal and open the api folder `cd api`. When you opened the folder run `nodemon .` to start the server on `http://localhost:3000/`

## SQL code for database

```
-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Gegenereerd op: 07 nov 2023 om 18:48
-- Serverversie: 10.4.24-MariaDB
-- PHP-versie: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

/_!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT _/;
/_!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS _/;
/_!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION _/;
/_!40101 SET NAMES utf8mb4 _/;

--
-- Database: `todolist`
--

---

--
-- Tabelstructuur voor tabel `categorieen`
--

CREATE TABLE `categorieen` (
`id` int(11) NOT NULL,
`categorie` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Gegevens worden geëxporteerd voor tabel `categorieen`
--

INSERT INTO `categorieen` (`id`, `categorie`) VALUES
(1, 'tuin'),
(2, 'huis'),
(3, 'kantoor');

---

--
-- Tabelstructuur voor tabel `list`
--

CREATE TABLE `list` (
`id` int(11) NOT NULL,
`task` varchar(500) NOT NULL,
`categorie_id` int(11) NOT NULL,
`checked` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Gegevens worden geëxporteerd voor tabel `list`
--

INSERT INTO `list` (`id`, `task`, `categorie_id`, `checked`) VALUES
(1, 'Taak 1', 1, 0),
(2, 'Taak 2', 1, 1),
(3, 'Taak 3', 2, 0),
(4, 'Taak 4', 3, 0),
(5, 'Taak 5', 2, 1),
(6, 'Taak 6', 1, 0),
(7, 'Taak 7', 3, 1),
(8, 'Taak 8', 2, 0),
(9, 'Taak 9', 1, 1),
(10, 'Taak 10', 3, 0);

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `categorieen`
--
ALTER TABLE `categorieen`
ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `list`
--
ALTER TABLE `list`
ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT voor geëxporteerde tabellen
--

--
-- AUTO_INCREMENT voor een tabel `categorieen`
--
ALTER TABLE `categorieen`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT voor een tabel `list`
--
ALTER TABLE `list`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;
COMMIT;

/_!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT _/;
/_!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS _/;
/_!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION _/;
```

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
