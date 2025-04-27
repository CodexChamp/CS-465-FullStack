# Travlr Getaways 

## Architecture
For this assignment, I followed the class’s instructions to build both a simple Express HTML front end and an Angular single-page app for the admin side. The Express pages reload on every request, which was straightforward since we covered that early in class. Then, we added an Angular SPA following the Full Stack Guide so that admin users can view and update trips without full page refreshes. On the backend, the course materials recommended MongoDB because it handles our trip documents more flexibly than a rigid SQL schema.

## Functionality
We learned how JSON acts as the bridge between front end and back end: the Angular app sends HTTP requests and gets back JSON data, which it then binds into the UI. In the example, I started with seven separate `Console.WriteLine` calls in C#, then refactored them into a loop over an array, just like we did in class to practice DRY principles. We also pulled the trip card markup into its own component so we could reuse it—everything was dictated by the assignment steps, but it really drove home why reusable components are useful.

## Testing
Following the lecture examples, I tested each endpoint in Postman: GET to fetch trips, POST to add, PUT to update, and DELETE when we covered it. Once we added the JWT-based login flow for admins, I practiced sending the token in the `Authorization` header and confirmed that protected routes returned 401 when no token was present. Having already worked in Azure/.NET environments, this was my first hands-on with manual token handling in Node/Express and Angular, and it highlighted how similar concepts translate across stacks.

## Reflection
This exercise built directly on what we learned in class, so I didn’t invent the architecture—it was all laid out step by step—but it did solidify my understanding by doing it myself. I came in with a background in ASP .NET, Azure, and SQL Server, so seeing how the same full-stack ideas apply in a Node/JavaScript/Mongo setup was eye-opening. Now I feel more comfortable switching between Microsoft stacks and modern JavaScript frameworks, and I can definitely add this example assignment to my portfolio as proof that I can follow instructions, debug issues, and deliver a working full-stack app.
