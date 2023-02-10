# LEARNING-REACT_SPA-Pages

1. In index.js, the App component is rendered to the page using ReactDOM, and the App component becomes the root component of the application.

2. In the App component, the state variable currentPage is initialized with the value "page1" using the useState hook. This state variable determines which of the two pages is displayed on the screen.

3. The App component returns a div with a class of container, which is a container for the two pages. The contents of this div are determined by a ternary operator that checks the value of currentPage.

4. If currentPage is equal to "page1", then the Page1 component is rendered. The Page1 component returns a div with a class of page that contains a heading and a hyperlink. The hyperlink has an onClick event handler that calls the setCurrentPage function and sets the value of currentPage to "page2".

5. If currentPage is equal to "page2", then the Page2 component is rendered. The Page2 component uses the useEffect hook to set the status message to "Your page is loaded" and to set focus to the heading. The heading has a tabIndex of -1 and an aria-describedby attribute that points to the ID of the status message.

6. The CSS is imported in the App component and styles the container and page classes. The CSS styles are applied to the HTML elements in the rendered components, which gives the pages their visual appearance.

7. When the user clicks the hyperlink on Page 1, the onClick event handler is triggered, and the setCurrentPage function is called. This changes the value of currentPage to "page2", causing the Page2 component to be rendered in place of the Page1 component.

8. When the Page2 component is rendered, the useEffect hook is called, and the status message and page heading are updated. The page heading has focus, so the user can immediately start interacting with the page.
