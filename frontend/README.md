## File Organization App

This application is for the storage and management of files. At this point in its development, it currently takes a folder name and description and stores it in MongoDB. There is full CRUD capability on the backend, but currently on the frontend you are only able to add and delete folders.

To use this application, first go to the root folder of your backend, and type ```service mongod start```, then ```npm run start```. The server will respond with a message of 'listening on ${PORT}' so that you know your server is properly hooked up.

Once the backend is running, open a new terminal window and navigate to the root folder of your front end. In your terminal, type ```npm run watch```. Webpack will compile the application's front end and when it has successfully finished, will reply with 'webpack: Compiled Successfully.'

Now that both the backend and frontend are running, open a window in the browser. Navigate to ```http://localhost:8080``` where you will see the main Dashboard page. From here, you are able to add a folder with a description. If no folder name or description are provided, then the page will throw an error in the console requiring that information before it can post to the server. 