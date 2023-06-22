-- Drop "Order" table
DROP TABLE IF EXISTS "Order";

-- Drop "Game" table
DROP TABLE IF EXISTS Game;

-- Drop "User" table
DROP TABLE IF EXISTS "User";

-- Create User table
CREATE TABLE "User" (
    UserID SERIAL PRIMARY KEY,
    FirstName VARCHAR(255),
    LastName VARCHAR(255),
    Email VARCHAR(255),
    Password VARCHAR(255),
    PhoneNo VARCHAR(20)
);

-- Create Game table
CREATE TABLE Game (
    GameID SERIAL PRIMARY KEY,
    Title VARCHAR(255),
    Description TEXT,
    Genre VARCHAR(255),
    Price DECIMAL(10, 2),
    ReleaseDate DATE,
    Platform VARCHAR(255),
    Quantity INTEGER,
    ImageURL VARCHAR(255)
);

-- Create "Order" table
CREATE TABLE "Order" (
    OrderID SERIAL PRIMARY KEY,
    UserID INTEGER REFERENCES "User"(UserID),
    GameID INTEGER REFERENCES Game(GameID),
    OrderDate DATE,
    TotalAmount DECIMAL(10, 2),
    Status VARCHAR(255)
);

-- Insert sample data into User table
INSERT INTO "User" (FirstName, LastName, Email, Password, PhoneNo)
VALUES
    ('Emily', 'Wilson', 'emilywilson@example.com', 'secure123', '9876543210'),
    ('David', 'Brown', 'davidbrown@example.com', 'password456', '5559876543'),
    ('Sarah', 'Davis', 'sarahdavis@example.com', 'letmein789', '1234567890');

-- Insert sample data into Game table
INSERT INTO Game (Title, Description, Genre, Price, ReleaseDate, Platform, Quantity, ImageURL)
VALUES
    ('Minecraft', 'Build, explore, and survive in a pixelated sandbox world.', 'Adventure', 29.99, '2011-11-18', 'Multiple', 20, 'https://example.com/minecraft.jpg'),
    ('FIFA 22', 'Experience the excitement of virtual soccer with realistic gameplay.', 'Sports', 59.99, '2021-10-01', 'PlayStation 5', 15, 'https://example.com/fifa_22.jpg'),
    ("Assassin's Creed Valhalla", 'Embark on a Viking adventure in this action-packed historical game.', 'Action-Adventure', 49.99, '2020-11-10', 'Xbox Series X', 12, 'https://example.com/assassins_creed_valhalla.jpg');

-- Insert sample data into Order table
INSERT INTO "Order" (UserID, GameID, OrderDate, TotalAmount, Status)
VALUES
    (1, 1, '2023-06-15', 29.99, 'Completed'),
    (2, 2, '2023-06-18', 59.99, 'In Progress'),
    (3, 3, '2023-06-20', 49.99, 'Completed');
