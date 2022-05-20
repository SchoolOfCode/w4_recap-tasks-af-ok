[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=7892036&assignment_repo_type=AssignmentRepo)
<h1 align="center">
  Week 4 - Recap
</h1>

## Get ready for next week

### ✨⭐ Prepare for Monday's extra special guest ⭐✨

On Monday afternoon, we have the absolute privilege of welcoming [Kyle Simpson](https://me.getify.com/) to SoC. If that name rings a bell, it's because he's an internationally recognized author and JavaScript expert and all around legend of JavaScript! Kyle has published 10+ books on JS including the [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS) book series (that you can read online for free!), taught thousands of developers from teams around the world, spoken at meetups and conferences, and run several major open-source projects.

👉 This weekend, watch his hour-long [Keep Betting on JavaScript](https://www.youtube.com/watch?v=51QNMy9MlZY) talk, and prepare questions for him in advance so we can make the most of his time in person with us. [Submit your questions using the form here](https://forms.gle/kfa3RmhWJDiMZ4Qp6), and we'll use the responses to call on people during the Q&A.

Feel free to watch additional talks and/or start reading [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS) as well, but be sure you at least watch the talk above.

## Recap task

### Create your API routes

👉 Create a REST API using the users [data](libs/users.js). Your API needs to be fully RESTful with all CRUD routes (create, read, update, delete).

| Operation         | Path          | Response body shape                                                          |
| ----------------- | ------------- | ---------------------------------------------------------------------------- |
| Get all users     | `/users`      | <code>{ success: true, payload: array of user objects } </code>              |
| Get user by id    | `/users/<id>` | <code>{ success: true, payload: user object }</code>                         |
| Create new user   | `/users`      | <code>{ success: true, payload: newly created user object }</code>           |
| Update user by id | `/users/<id>` | <code>{ success: true, payload: new user object (after replacement) }</code> |
| Delete user by id | `/users/<id>` | <code>{ success: true, payload: deleted user } </code>                       |

Remember to break down the task and tackle it bit by bit.

- Start by looking at the data and familiarizing yourself with how it's structured.
- Make a plan for each CRUD route, and break down the logic in that plan until you can't break it down any more!
- Code each route one by one in the [users router](routes/users.js).
  - Remember, you'll need to export your router and import and use it in [app.js](app.js).
  - Test each route as you finish it before you move on to the next one!
  - Add, commit, and push after you complete each route.

If you are still fuzzy on Postman, you can [read more about it here](https://learning.postman.com/docs/getting-started/introduction/).

**Note:** The starter code as currently written uses the ES6 import/export syntax. You can choose to use this or to refactor to CommonJS's require. The majority of the code will remain the same - the only parts that will change are the import and export statements themselves at the tops and bottoms of files and whether or not you specify `"type": "module"` in the [package.json](package.json).

## Bonus challenges (_These are optional if you're ready for an extra challenge!_)

⭐ Separate out your models.

Once all your routes are functioning and committed to Github, separate out the logic that actually interacts with the data into the functions in the [models](models/users.js). You can then import these and use them in the router. Again, tackle them one at a time! Test each to make sure they still function correctly, and then commit after you know each is working.

When you're planning and coding this, think about what part of the logic is relevant to routing, and what part is relevant to actually talking to the data. That’s what we’re separating out. The models are a mechanism to interact with the data and return what we need, and then the route will use that to respond.

Remember the reasons why we separate concerns like our routes and models. These include:

- Our code is more organized and easier for fellow developers (and future you!) to navigate with lighter cognitive load.
- We can make any changes to parts of our server's architecture more easily without having to change the whole thing. For example, next week, when we layer on databases, we can easily go back and change our models to talk to the database instead of the hard-coded data file in this repo, and our app.js, routes, etc. will remain the same.

⭐ See if you can implement a `generateID` function in your `models/users.js` file, and use it in your `createUser` function.

```js
/**
 * BONUS:
 * This function could be used when creating new users
 * It would ensure that new IDs are valid and follow our pattern
 */
function generateID() {
  // Look through the users list
  // Find the first ID number missing, or the next number in the sequence
  // return that number
}
```

⭐ If you've finished everything above and have time left over, keep developing! Think through what ideas you can come up with to improve functionality.

This can include:

- Implementing the correct HTTP response status code
- Making a front end to consume and display your data
- Additional routes that include searching the data using queries
- Implementing middleware (start with a simple logger, and then explore what else you can add)
- Researching the following concepts (some links are provided as a starting point, but feel free to find your own links, YouTube videos, etc). Try to understand what the concept is and why is it useful:

  - Error handling in APIs:
    https://expressjs.com/en/guide/error-handling.html
  - Request/input validation: https://apisyouwonthate.com/blog/server-side-validation-with-api-descriptions
  - Pagination: https://developer.atlassian.com/server/confluence/pagination-in-the-rest-api/
