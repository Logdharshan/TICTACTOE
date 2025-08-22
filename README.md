# TICTACTOE
A Simple TicTacToe project Using SpringBoot
TicTacToe (Java)

Simple TicTacToe game built in Java (Spring Boot). Perfect for learning + showcasing in placements.

✨ Features

3x3 board, X vs O

Win/draw detection

Clean console/web UI (update if needed)

Easy to run

🧰 Tech Stack

Java 17 (change if different)

Spring Boot (remove if not using)

Maven

🚀 Getting Started
1) Clone & open
git clone https://github.com/<your-username>/TICTACTOE.git
cd TICTACTOE

2) Build & run
mvn clean install
mvn spring-boot:run


App starts on: http://localhost:8080 (update if different)

If it’s a pure Java console app, replace the above with:

javac -d out src/**/*.java
java -cp out com.example.tictactoe.TictactoeApplication

🖼️ Screenshot

Put your image inside an images/ folder and link it here.

![TicTacToe Screenshot](images/tictactoe-home.png)

How to add the image (Windows / PowerShell)
# inside your project root
mkdir images
# copy your screenshot into the images folder, e.g.:
# (drag & drop using File Explorer) or:
# Copy-Item "C:\Path\to\your\screenshot.png" .\images\tictactoe-home.png

git add .
git commit -m "Add screenshot and README"
git push

🧪 Tests
mvn test
