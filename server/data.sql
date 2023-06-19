-- Create User table
CREATE TABLE User (
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
    Platform VARCHAR(255)
);

-- Create Order table
CREATE TABLE Order (
    OrderID SERIAL PRIMARY KEY,
    UserID INTEGER REFERENCES User(UserID),
    OrderDate DATE,
    TotalAmount DECIMAL(10, 2),
    Status VARCHAR(255)
);

-- Create OrderItem table
CREATE TABLE OrderItem (
    OrderItemID SERIAL PRIMARY KEY,
    OrderID INTEGER REFERENCES Order(OrderID),
    GameID INTEGER REFERENCES Game(GameID),
    Quantity INTEGER,
    Subtotal DECIMAL(10, 2)
);
