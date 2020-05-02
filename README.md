##This project is the solution for the following task:
Result deployed to https://agitated-poitras-400757.netlify.app/

## Implement list editor that supports following interactions:
- Addition of new list item
- Removal of list item
- Creation of a sub list
- Removal of s sub list
- Moving item up inside list
- Moving item down inside list

See example of HTML structure: [Codepen](https://codepen.io/SirNicholas/pen/qGJxyG)

### Default view:
- One `ul ` with input and `Add` button.
- Input with `Add` button should always be the last option in parent list and all children lists
- There is no limit to how many sublists can be present.

### Buttons behavior:
- `down` - move item below in the current list, is not displayed for the last item in the list. If the current item has a sublist, this sublist should be moved too.
- `up` - move item above in the current list, is not displayed for the first item in the list. If the current item has a sublist, this sublist should be moved too.
-  `Add Sublist` - adds sublist below current item. Sublist should contain an input field with the `Add` button. Is not displayed in case current item already has a sublist
- `Remove Sublist` - displays only if the current item has a sublist. Should remove a sublist.
- `Remove ` - removes the current item. Should always be displayed. If the current item has a sublist, sublist should be removed too.

### Must-Use Stack:
- ES6 with Babel
- React.js 16+
- Redux (optional).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
