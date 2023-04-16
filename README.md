# AngularTypeScript
## create angular project
ng new theNameOfProject

## Go to the workspace directory and launch the application.
cd angular-tour-of-heroes
ng serve --open

## create component inside components example bellow
ng generate component components/header
## font awesome
ng add @fortawesome/angular-fontawesome@

## services
ng generate service services/task  for task 
## Json server for fake data
 npm install json-server
 wrote     "server": "json-server --watch db.json --port 5000" in package json
 npm run server
 http://localhost:5000/tasks for backend