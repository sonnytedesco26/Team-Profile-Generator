# Team-Profile-Generator

For this module, the challenge was to create Node.js terminal app that creates an html page reflecting the responses in the terminal. In this case, it is for an Employee team, equipped with Engineers, Interns, and managers. The application also has built in tests to make sure everything is working properly. When finishing in the terminal, the app creates an html document in the dist directory.

Video Demo:

![Link] https://drive.google.com/file/d/1IRDvYdC-Tj2uMu9hWll08oqTYlwCkYd5/view?usp=sharing

## Installation
When downloading the repo, go to the root directory in the terminal and type in 'npm install'.

## Use
Once installed, open the terminal in the root directory of the repo. Run "node index.js" to start the app and set the employees. Once ready, select the 'Finished' option in the terminal. This will create an HTML file in the dist directory which will generate your returned results. If you want to test the repo to see if the functions such as GetRole() work properly, run in the root directory, "npm run test" 

## User Story
```
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```
