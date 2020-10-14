My thought process in helping building a dashboard to choose “winning” technology:

1. Understand what are the minimum requirements asked for the project:
- Have a UI that allows a user to compare & sort results for each technology;
- Use GitHub API to get data about React, Angular, Ember, Vue and based on watchers, stars, forks etc., determine which one would be the best choice overall.
- Make sure data updates without refreshing the page;

2. Determine what could be a good UI to make the user take the best and fastest decision on which framework would be the best.

3. Started by creating a small React App that fetches the data, and updates it every 10 seconds. For better visualization I chose to put data in a table, create labels for each column and row and add sorting features.
