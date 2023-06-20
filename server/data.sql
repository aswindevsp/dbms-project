-- Delete OrderItem table
DROP TABLE IF EXISTS OrderItem;

-- Delete ShoppingCart table
DROP TABLE IF EXISTS ShoppingCart;

-- Delete "Order" table
DROP TABLE IF EXISTS "Order";

-- Delete Game table
DROP TABLE IF EXISTS Game;

-- Delete "User" table
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
    Quantity INTEGER
);

-- Create "Order" table
CREATE TABLE "Order" (
    OrderID SERIAL PRIMARY KEY,
    UserID INTEGER REFERENCES "User"(UserID),
    OrderDate DATE,
    TotalAmount DECIMAL(10, 2),
    Status VARCHAR(255)
);

-- Create OrderItem table
CREATE TABLE OrderItem (
    OrderItemID SERIAL PRIMARY KEY,
    OrderID INTEGER REFERENCES "Order"(OrderID),
    GameID INTEGER REFERENCES Game(GameID),
    Quantity INTEGER,
    Subtotal DECIMAL(10, 2)
);

-- Create ShoppingCart table
CREATE TABLE ShoppingCart (
    CartItemID SERIAL PRIMARY KEY,
    UserID INTEGER REFERENCES "User"(UserID),
    GameID INTEGER REFERENCES Game(GameID),
    Quantity INTEGER,
    Price DECIMAL(10, 2),
    Subtotal DECIMAL(10, 2)
);

-- Insert sample data into User table
INSERT INTO "User" (FirstName, LastName, Email, Password, PhoneNo)
VALUES
    ('John', 'Doe', 'johndoe@example.com', 'password123', '1234567890'),
    ('Jane', 'Smith', 'janesmith@example.com', 'pass456', '9876543210');

-- Insert sample data into Game table
INSERT INTO Game (Title, Description, Genre, Price, ReleaseDate, Platform, Quantity)
VALUES
    ('Game 1', 'Description of Game 1', 'Action', 29.99, '2022-01-01', 'Xbox', 10),
    ('Game 2', 'Description of Game 2', 'Adventure', 39.99, '2022-02-01', 'PlayStation', 5);

-- Insert sample data into "Order" table
INSERT INTO "Order" (UserID, OrderDate, TotalAmount, Status)
VALUES
    (1, '2022-01-15', 59.98, 'Pending'),
    (2, '2022-02-20', 79.98, 'Processing');

-- Insert sample data into OrderItem table
INSERT INTO OrderItem (OrderID, GameID, Quantity, Subtotal)
VALUES
    (1, 1, 2, 59.98),
    (2, 2, 1, 39.99);

-- Insert sample data into ShoppingCart table
INSERT INTO ShoppingCart (UserID, GameID, Quantity, Price, Subtotal)
VALUES
    (1, 1, 1, 29.99, 29.99),
    (1, 2, 2, 39.99, 79.98),
    (2, 2, 1, 39.99, 39.99);
