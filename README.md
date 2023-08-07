# Football Statistics App Challenge

Welcome to the Football Statistics App Challenge! In this challenge, you will be tasked with creating a full-stack web application using Express, EJS, CSS, and MongoDB Atlas. The application will serve as a football statistics app that stores information about football player profiles.

## Challenge Objective

The objective of this challenge is to create a non-relational database using MongoDB Atlas, and scrape data from https://www.fifaindex.com/players/. Your application should be able to store and display player information, including player name, age, nationality, position, club, and ratings.

## Technologies to Use

This challenge is designed to help you improve your skills in full-stack development, database management, web scraping, and data visualization. You will be required to use the following technologies:

- Express for server-side development
- EJS for templating
- CSS for styling
- MongoDB Atlas for non-relational data management

## Steps to Complete the Challenge

To complete this challenge, you will need to follow these steps:

1. Set up a new Express application with EJS templating.
2. Create a MongoDB Atlas account and connect it to your Express application.
3. Write a web scraper that can extract data from https://www.fifaindex.com/players/.
4. Store the scraped data in your MongoDB database.
5. Create an API that can serve the player data to your application.
6. Use EJS to create a player profile page that can display the player information in a visually appealing way.
7. Implement CSS to style your application.
8. Test your application to ensure that it works as intended.

## Challenge Outcome

By the end of this challenge, you should have a fully functional football statistics app that can scrape player data from https://www.fifaindex.com/players/, store it in a non-relational MongoDB database, and display the data in a visually appealing way.

We wish you the best of luck in this challenge, and we look forward to seeing what you can create!


## Tips and Advice for Creating a Full-Stack Football Statistics App

🚀 Congratulations on taking on this challenge! Creating a full-stack application can be a daunting task, but with the right mindset and resources, you can do it. Here are some tips and advice to help you on your journey:

1. Plan before you code: Take the time to sketch out your application's structure and functionality before diving into the code. This will save you time in the long run and help you avoid common mistakes.

2. Keep it simple: Don't try to build the most complex application ever. Focus on creating an application that is functional and easy to use. You can always add more features later.

3. Use available resources: There are tons of resources available online that can help you learn and troubleshoot. Some great resources include documentation for the technologies you are using, online forums, and Stack Overflow.

4. Collaborate: Don't be afraid to reach out to your classmates or online communities for help. Collaborating with others can help you learn faster and solve problems more efficiently.

5. Test your code frequently: Don't wait until the end of the development process to test your code. Test early and test often to catch errors before they become major issues.

6. Keep it clean: Write clean, well-organized code that is easy to read and understand. This will make it easier to troubleshoot and maintain your application.

7. Have fun: Remember that programming can be a fun and rewarding experience. Enjoy the process of building your application, and don't get discouraged if things don't go as planned.

📚 Resources:

- Express documentation: https://expressjs.com/
- EJS documentation: https://ejs.co/
- MongoDB Atlas documentation: https://docs.atlas.mongodb.com/
- CSS resources: https://www.w3schools.com/css/
- Web scraping resources: https://www.freecodecamp.org/news/web-scraping-python-tutorial-how-to-scrape-data-from-a-website/

Good luck, and happy coding! 💻👨‍💻👩‍💻



## More infos to get you started on each step.

*This is not a fully working step By Step tutorial, there is some infos to get you started and avoid the blank page Syndrom. This challenge can be completed whithout having to rely on these hints!*

### Step 1: Set up a new Express application with EJS templating

To get started, follow these steps:

1. Install Node.js and NPM on your machine if you haven't already done so.
2. Open a new terminal window and create a new project directory using the `mkdir` command.
3. Navigate to the new project directory using the `cd` command.
4. Initialize a new Node.js project using the `npm init` command.
5. Install Express and EJS as dependencies using the `npm install express ejs` command.
6. Create a new file named `index.js` in your project directory.
7. Add the following code to your `index.js` file:

```js
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
res.render('index');
});

app.listen(3000, () => {
console.log('Server started on port 3000');
});
```

8. Create a new directory named `views` in your project directory.
9. Create a new file named `index.ejs` in your `views` directory.
10. Add the following code to your `index.ejs` file:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Football Statistics App</title>
  </head>
  <body>
    <h1>Welcome to the Football Statistics App!</h1>
  </body>
</html>
```

11. Start your server by running the command node index.js.
12. Visit http://localhost:3000/ in your web browser to see your application running.

Your Express application with EJS templating is now set up and running! You can now move on to the next step of the challenge.


### Step 2: Create a MongoDB Atlas account and connect it to your Express application

To create a MongoDB Atlas account and connect it to your Express application, follow these steps:

1. Go to the MongoDB Atlas website (https://www.mongodb.com/cloud/atlas) and create a new account if you haven't already done so.
2. Create a new project by clicking the "New Project" button and following the prompts.
3. Once your project is created, click the "Build a Cluster" button to create a new MongoDB cluster.
4. Choose your preferred cloud provider, region, and cluster tier, and then click the "Create Cluster" button.
5. Once your cluster is created, click the "Connect" button to get your connection string.
6. Choose "Connect Your Application" from the connection options and copy the connection string.
7. In your Express application, install the `mongoose` package using the `npm install mongoose` command.
8. In your `index.js` file, add the following code to connect to your MongoDB Atlas database:

```js
const mongoose = require('mongoose');

mongoose.connect('YOUR_CONNECTION_STRING_HERE', {
useNewUrlParser: true,
useUnifiedTopology: true
}).then(() => {
console.log('MongoDB Atlas connected!');
}).catch(err => {
console.log(err);
});
```

*Replace `YOUR_CONNECTION_STRING_HERE` with the connection string you copied in step 6.*

9. Test your database connection by running your Express application and checking the console output for the "MongoDB Atlas connected!" message.

Your MongoDB Atlas account is now connected to your Express application, and you can move on to the next step of the challenge.


## Step 3: Write a web scraper that can extract data from https://www.fifaindex.com/players/

To write a web scraper that can extract data from https://www.fifaindex.com/players/, follow these steps:

1. Install the `axios` and `cheerio` packages using the `npm install axios cheerio` command.
2. Create a new file named `scraper.js` in your project directory.
3. Add the following code to your `scraper.js` file:

```js
const axios = require('axios');
const cheerio = require('cheerio');

axios.get('https://www.fifaindex.com/players/')
.then(response => {
const $ = cheerio.load(response.data);

 $('tbody > tr[data-playerid]').each(async (i, element) => {
        const name = $(element).find('td[data-title="Name"] > a').text();
        const nationality = $(element).find('td[data-title="Nationality"] > a').attr('title');
        const club = $(element).find('td[data-title="Team"] > a').attr('title');
        const overallRating = $(element).find('td[data-title="OVR / POT"] > span:nth-child(1)').text();

  console.log({ name, nationality, club, overallRating });
});

})
.catch(error => {
console.log(error);
});
```

*This code uses the `axios` package to make a GET request to https://www.fifaindex.com/players/, and then uses the `cheerio` package to parse the HTML response and extract the data we're interested in. In this example, we're extracting the player name, nationality, club, and overall rating for each player listed on the page.*

4. Run the `scraper.js` file using the `node scraper.js` command to test that your scraper is working correctly.
5. Modify the code in `scraper.js` to save the extracted data to your MongoDB Atlas database.

Your web scraper is now set up and ready to extract data from https://www.fifaindex.com/players/! You can now move on to the next step of the challenge.


### Step 4: Store the scraped data in your MongoDB database

To store the data you've scraped from https://www.fifaindex.com/players/ in your MongoDB Atlas database, follow these steps:

1. Connect to your MongoDB Atlas database using the `mongodb` package. You can use the following code to connect:

```js
const MongoClient = require('mongodb').MongoClient;

const uri = 'YOUR_MONGODB_ATLAS_URI';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
const collection = client.db('YOUR_DB_NAME').collection('YOUR_COLLECTION_NAME');
// insert your data here
client.close();
});
```

*Replace `YOUR_MONGODB_ATLAS_URI`, `YOUR_DB_NAME`, and `YOUR_COLLECTION_NAME` with your own values.*

2. Modify the code in your `scraper.js` file to insert the scraped data into your MongoDB Atlas database. You can use the following code as a starting point:

```js
const MongoClient = require('mongodb').MongoClient;
const axios = require('axios');
const cheerio = require('cheerio');

const uri = 'YOUR_MONGODB_ATLAS_URI';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
const collection = client.db('YOUR_DB_NAME').collection('YOUR_COLLECTION_NAME');

axios.get('https://www.fifaindex.com/players/')
.then(response => {
const $ = cheerio.load(response.data);
   $('tbody > tr[data-playerid]').each(async (i, element) => {
        const name = $(element).find('td[data-title="Name"] > a').text();
        const nationality = $(element).find('td[data-title="Nationality"] > a').attr('title');
        const club = $(element).find('td[data-title="Team"] > a').attr('title');
        const overallRating = $(element).find('td[data-title="OVR / POT"] > span:nth-child(1)').text();

    collection.insertOne({ name, nationality, club, overallRating });
  });
})
.catch(error => {
  console.log(error);
})
.finally(() => {
  client.close();
});
});
```

*This code inserts the scraped data into a MongoDB Atlas collection using the `insertOne()` method.*

3. Run the `scraper.js` file using the `node scraper.js` command to test that your scraper is inserting data correctly into your MongoDB Atlas database.

Your scraped data is now being stored in your MongoDB Atlas database! You can now move on to the next step of the challenge.

### Step 5: Create an API that can serve the player data to your application

To create an API that can serve the player data from your MongoDB Atlas database to your application, follow these steps:

1. Install the `express` and `mongoose` packages using the `npm install express mongoose` command.

2. Set up your `players` collection in your MongoDB Atlas database using the `mongoose` package. You can use the following code as a starting point:


```js
const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
name: String,
nationality: String,
club: String,
overallRating: Number
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
```

*This code defines a `Player` model that represents the structure of a player document in your `players` collection.*

3. Create an `api.js` file in your Express application's directory that will serve the player data. You can use the following code as a starting point:

```js
const express = require('express');
const router = express.Router();
const Player = require('./player.model');

router.get('/players', async (req, res) => {
try {
const players = await Player.find({});
res.json(players);
} catch (err) {
console.log(err);
res.status(500).send('Server error');
}
});

module.exports = router;
```

*This code creates an Express router that handles GET requests to the `/players` route. It uses the `Player` model to retrieve all player documents from the `players` collection in your MongoDB Atlas database and returns them as a JSON response.*

4. Mount the `api.js` router in your Express application's main file. You can use the following code as a starting point:

```js
const express = require('express');
const mongoose = require('mongoose');
const apiRouter = require('./api');

const app = express();

mongoose.connect('YOUR_MONGODB_ATLAS_URI', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.use('/api', apiRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(Server started on port ${PORT}));
```

*This code connects to your MongoDB Atlas database and mounts the `api.js` router under the `/api` route. It starts the Express server and listens for requests on the specified port.*

5. Test your API by visiting `http://localhost:3000/api/players` in your web browser. You should see a JSON response containing the player data from your MongoDB Atlas database.

Your API is now serving player data from your MongoDB Atlas database to your application! You can now move on to the next step of the challenge.


## Step 6: Use EJS to create a player profile page

Now that you have extracted player data and stored it in your MongoDB database, you can use EJS templating to create a visually appealing player profile page.

1. Create a new EJS template file for displaying the player profile page.
2. Write an Express route that retrieves a player's information from your database.
3. Pass the player information to the EJS template and render it in an HTML format.
4. Use CSS to style the player profile page to make it visually appealing.

Make sure that the player profile page is user-friendly and displays all of the necessary information about a player in an easy-to-read format. You may also consider adding additional features to the player profile page, such as graphs or charts that display a player's statistics in a more interactive way.

## Step 7: Implement CSS to style your application

Now that you have the functionality of your application working, it's time to make it visually appealing by adding CSS.

1. Create a new CSS file and link it to your EJS templates.
2. Use CSS to add styles to your HTML elements, such as fonts, colors, and layout.
3. Ensure that your CSS is responsive and adapts to different screen sizes.
4. Test your CSS changes on multiple devices and browsers to ensure consistency.

Remember to keep your design consistent throughout your application and ensure that it aligns with your intended user experience. You may also consider using CSS frameworks such as Bootstrap to make the process easier and ensure a consistent design across your application.

## Step 8: Test your application

Now that you have completed all the previous steps, it's time to test your application and ensure that it works as intended.

1. Test your web scraper to ensure that it can extract player data from the FIFA Index website.
2. Test your database connection to ensure that it can store the scraped data.
3. Test your API endpoints to ensure that they return the correct data.
4. Test your application's functionality to ensure that it is user-friendly and easy to use.
5. Test your application's responsiveness to ensure that it looks good and functions correctly on different devices and screen sizes.
6. Fix any bugs or errors that you find during testing.
7. Deploy your application to a hosting service such as Heroku to ensure that it works in a production environment.

Testing is a critical part of the development process, and it is essential to ensure that your application is working correctly before you deploy it to users. Remember to test your application thoroughly and make any necessary fixes before deploying it to production.




