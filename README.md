# React Uber Eats

## Task
Follow this Video guide(p. 1 - 4)

To use cc alias as author follow this instructions - this is not required, you may create files manually by self

Implement Uber eats using this design

Base API url: https://mate-uber-eats-api.herokuapp.com/api/v1/

Implement list of restaurants on the Home page
use redux to store data
use redux-thunk to handle async actions
create separate component for restaurant card
use https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants endpoint to fetch data
accept optional query parameter location: london|kyiv
RestaurantCard should be clickable fully (not only the image)
Implement basic header markup
Implement footer
Add functionality and styles for mobile and tablet versions
Location, Deliver now and Search should be replaced whith buttons on the small screens. Block with inputs should apper below the header after click on the button.
Implement RestaurantPage
use uuid in the URL
fetch data from https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants/:uuid
Implement modal window for selecting a meal
fetch data for modal from https://mate-uber-eats-api.herokuapp.com/api/v1/menu-items/:uuid
open it when clicking on a meal
close it on X or after adding
(*) close it on outside click
(**) use a unique link for a modal
Extra Tasks
Implement dropdown to select location
fetch data from https://mate-uber-eats-api.herokuapp.com/api/v1/locations
use data from endpoint to render dropdown options
select first option by default
load restaurants only after you receive this response, use id of location in query params(https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants?location=:uuid)
reload restaurants with other query when select item in dropdown
Implement frontend search
filter current list of restaurants on search input change
use debounce
do not save additional list in store, use selectors instead
(*) redirect to home page if user search on restaurant page
Add functionality to the select meal modal
add ability to change meal count
render correct controls for customization options:
if section(item of customizationsList) minPermitted === maxPermitted === 1 - render options as radio button
if option maxPermitted > 2 - render + button(change to +, - and count if at least 1 selected)
else - render option as checkbox
make inputs controlled(save selected customizations)
change overal price after add remove customizations/after change meal count(if burger cost $10 and select additional chease for $2, then change count of meal to 3, price should be $36(not $32))
Implement a Basket(so far as in real uber, design will be added later)
show basket button in header instead of Sign in if there are at least 1 item in basket
open basket sidebar when click on busket button, close on click outside or close icon
add item to basket when click submit in MenuItemModal
show list added items in basket
add ability to change item count, remove item
when user click edit on item - open MenuItemModal with additional remove button. After submit, edit current item instead of add new one
clear basket when user click order button
Restore user session after close-open tab
subscribe to store and save serialized state in localStorage on each update(or find another way)
check localStorage for the presence of a saved state and use it in createStore
(*) use react-router-redux to save route in redux, user should be on the same page as before when open your website second time
Rewrite the application on TypeScript.
write interfaces for Location, Restaurant, RestaurantDetails, MenuItem, CustomizationSection, CustomizationOption etc.
Workflow
Fork the repository with task
Clone forked repository
git clone git@github.com:<user_name>/<task_repository>.git
Run npm install to install dependencies.
Then develop
Development mode
Run npm start to start development server on http://localhost:3000 When you run server the command line window will no longer be available for writing commands until you stop server (ctrl + c). All other commands you need to run in new command line window.
Follow HTML, CSS styleguide
Follow the simplified JS styleguide
run npm run lint to check code style
When you finished add correct homepage to package.json and run npm run deploy
Add links to your demo in readme.md.
[DEMO LINK](https://<your_account>.github.io/<repo_name>/) - this will be a link to your index.html
Commit and push all recent changes.
Create Pull Request from forked repo (<branch_name>) to original repo (master).
Add a link at PR to Google Spreadsheets.
Project structure
You should be writing your code in src/ directory.
