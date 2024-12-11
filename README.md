# Silent Navigation Failure in React Router Dom
This repository demonstrates a subtle bug in React Router Dom where navigation stops working after a user interaction on the destination route.  The navigation appears to succeed initially but subsequent attempts fail silently.  No errors are thrown in the console, making debugging difficult.

## Bug Description
The bug occurs when a route component has some user interaction (e.g. button click) that updates the component's state or performs some other action.  After this interaction, further navigation using the React Router's navigation methods will appear to do nothing; no errors will be visible in the console.

## How to Reproduce
1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Navigate to the '/about' route.
5. Click the button on the home page. Notice navigation will fail silently.