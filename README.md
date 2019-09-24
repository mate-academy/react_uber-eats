# React Uber Eats

## Task     
Implement [Uber eats](https://www.ubereats.com/en-UA/feed/?pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkt5aXYlMjIlMkMlMjJyZWZlcmVuY2UlMjIlM0ElMjJDaElKQlVWYTRVN1AxRUFSX2tZQkY5SXhTWFklMjIlMkMlMjJyZWZlcmVuY2VUeXBlJTIyJTNBJTIyZ29vZ2xlX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNTAuNDQ5ODU4NyUyQyUyMmxvbmdpdHVkZSUyMiUzQTMwLjUyMzY0OTYlN0Q%3D)
using [this design](https://www.figma.com/file/cABVXdvRdGiXYzffeOE4gG/Uber-Eats-Adaptive-Dev-Copy?node-id=0%3A1)

Base API url: https://mate-uber-eats-api.herokuapp.com/api/v1/

1. Implement list of restaurants on the `Home` page
  - use `redux` to store data
  - use `redux-thunk` to handle async actions
  - create separate component for restaurant card
  - use https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants endpoint to fetch data
    - accept optional query parameter `location`: `london|kyiv` 
  - `RestaurantCard` should be clickable fully (not only the image) 
2. Implement basic header markup
    - `Location`, `Deliver now` and `Search` should be replaced whith buttons on the small screens.
    Block with inputs should apper below the header after click on the button. 
3. Implement footer
    - Pay attention to mobile version
    - Implement got to top arrow  
4. Implement `RestaurantPage`
    - use `uuid` in the URL
    - fetch data from https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants/:uuid
5. Implement modal window for selecting a meal
    - open it when clicking on a meal
    - close it on `X` or after adding
    - (*) close it on outside click
    - (**) use a unique link for a modal

### Extra Tasks
1. Implement location autocomplete
1. Implement search autocomplete
1. Implement `delivery time` selection
1. Implement a `Basket`

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
  - `[DEMO LINK](https://<your_account>.github.io/<repo_name>/)` - this will be a 
  link to your index.html
- Commit and push all recent changes.
- Create `Pull Request` from forked repo `(<branch_name>)` to original repo 
(`master`).
- Add a link at `PR` to Google Spreadsheets.

## Project structure
You should be writing your code in `src/` directory.
