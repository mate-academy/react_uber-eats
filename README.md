# React Uber Eats

## Task     
Implement [Uber eats](https://www.ubereats.com/en-UA/feed/?pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkt5aXYlMjIlMkMlMjJyZWZlcmVuY2UlMjIlM0ElMjJDaElKQlVWYTRVN1AxRUFSX2tZQkY5SXhTWFklMjIlMkMlMjJyZWZlcmVuY2VUeXBlJTIyJTNBJTIyZ29vZ2xlX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNTAuNDQ5ODU4NyUyQyUyMmxvbmdpdHVkZSUyMiUzQTMwLjUyMzY0OTYlN0Q%3D)
using [this design](https://www.figma.com/file/j2sfk3XSjRf12SC27z0Ykf/Uber-eats-adaptive?node-id=0%3A1)

1. Implement basic header markup
    - `Location` and `Search` should be placed on the next line for small screens
    - `Deliver now` should appear on small screens
    - `Location` should be replaced with a header on small screens   
2. Implement footer
    - Pay attention to mobile version
    - Implement got to top arrow  
3. Implement `HomePage` with the list of restaurants in [London](https://mate-academy.github.io/react_uber-eats/api/location/ChIJdd4hrwug2EcRmSrV3Vo6llI.json)
    - `RestaurantCard` should be clickable fully (not only the image) 
4. Implement `RestaurantPage` basing on [McDonald's® (Victoria)](https://mate-academy.github.io/react_uber-eats/api/restaurants/d7c942e8-d2b3-4004-b964-d8e008da75b0.json)
    - use `uuid` in the URL
5. Implement modal window for selecting a meal
    - open it when clicking on a meal
    - close it on `X` or after adding
    - (*) close it on outside click
    - (**) use a unique link for a modal

### Extra Tasks
1. Implement location autocomplete
2. Implement a `Basket`
3. Implement search autocomplete
4. Implement `delivery time` selection

## Workflow
- Fork the repository with task
- Clone forked repository 
    ```bash
    git clone git@github.com:<user_name>/<task_repository>.git
    ```
- Run `npm install` to install dependencies.
- Then develop

## Development mode 
- Run `npm start` to start development server on `http://localhost:3000`
    When you run server the command line window will no longer be available for 
    writing commands until you stop server (`ctrl + c`). All other commands you 
    need to run in new command line window.
- Follow [HTML, CSS styleguide](https://mate-academy.github.io/style-guides/htmlcss.html)
- Follow [the simplified JS styleguide](https://mate-academy.github.io/style-guides/javascript-standard-modified)
- run `npm run lint` to check code style
- When you finished add correct `homepage` to `package.json` and run `npm run deploy` 
- Add links to your demo in readme.md.
  - `[DEMO LINK](https://SergGolub89.github.io/react_uber-eats)` - this will be a 
  link to your index.html
- Commit and push all recent changes.
- Create `Pull Request` from forked repo `(<branch_name>)` to original repo 
(`master`).
- Add a link at `PR` to Google Spreadsheets.

## Project structure
You should be writing your code in `src/` directory.
