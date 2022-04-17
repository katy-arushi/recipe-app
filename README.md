# Veggielicious 🌱

**Veggielicious** is a recipe app that features only vegetarian or vegan recipes. 
Users can filter recipes by cuisine, such as Greek, Italian, Indian, Spanish, and more.
The app fetches data from the [Spoonacular API](https://spoonacular.com/food-api).

## **Access the deployed app [here](https://veggielicious.netlify.app/)!**

Inspired by this [tutorial](https://www.youtube.com/watch?v=xc4uOzlndAk) from [Dev Ed](https://github.com/developedbyed/).

### Overall thoughts on the project
This tutorial was a great review of basic **React** concepts such as the useState and useEffect hooks, as well as fetching API data and mapping over data to create components. I feel pretty solid about basic React now and I'm ready to take on more complex hooks and concepts. I wasn't a huge fan of the styling done by Dev Ed so I've made some changes as well as some improvements such as adding more cuisines to filter by and changing the app to feature vegetarian or vegan recipes only, as I am vegetarian. I really like the search feature, which actually wasn't that complex to implement.

I really liked the use of **styled components** for styling in this app. Definitely going to use those going forward because they seem so simple and intuitive.

As for **future features**, I'd like to add more filters, maybe by allowing users to search for specific types of recipes such as beverages, desserts, etc. Maybe a user could also be able to favourite recipes they liked. Looking at the API docs, it's also pretty easy to implement a 'What's for dinner' app based on ingredients that a user already has, and this could be another interesting feature.

**A warning**: the Spoonacular API limits you to 150 requests a day. This is especially a problem until you implement saving the main page recipes to localstorage, as every minor change makes the app refresh. There are ways to... get creative and get around the 150 request limit but it's definitely annoying. 

## Available Scripts
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


