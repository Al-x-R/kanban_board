# Kanban board - trello on minimals

## Stack
 - React
 - Node Js
 - Express
 - PostgreSQL

## About the project

The project involves creating a board with tasks, 
breaking them into groups and controlling the progress by dragging the task from one group to another

## Features
 - Registration
 - Authentication
 - Private routes
 - Boards list
 - Single board
 - Reorderable lists and tasks
 
#### Board functionality
 - Column creation
 - Display activities across the board in a drop-down sidebar
 - Removing a board with all its contents in a drop-down sidebar
 
#### Column functionality
  - Editing the title by double-clicking, 
  confirming the editing with the enter button
  - Deleting a column with all its contents
  
#### Task functionality
  - Adding and editing a task description
  - Adding and removing a comment to a task
  - The ability to display and hide all actions performed with this task card and their time from the moment of this action
  - Ability to drag a card with a task from one task pile to another
  - Deleting a card with all its contents
  

## Available Scripts

### The project consists of two directories:
 - client 
 - server
 
At first in the client directory run: 
#### `npm init` 
to install all dependencies

Then in the server directory run: 
#### `npm init`
to install all dependencies
Then in the root of the directory find the file `.env.example` and change its name to `.env`

If your database is PostgreSQl run scripts:
 ##### `npm run db: create`
 ##### `npm run db: migration`
 ##### `npm run db: seeds`
 
If your database is SQL, then first in the config directory in the database file, 
change the dialect from postgres to sql and run scripts: 
 ##### `npm run db: create`
 ##### `npm run db: migration`
 ##### `npm run db: seeds`

To run the app in the development mode run script:
#### `npm run dev`

