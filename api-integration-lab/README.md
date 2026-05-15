API Integration Lab – README

Overview:
This project demonstrates how to integrate an external API into a React application. It fetches user data from an online API and displays it dynamically using React components.

Challenges Encountered:

1. Fetching Data from API
   At first, I had difficulty understanding how asynchronous data fetching works in React. The component was rendering before the data was available.

Solution:
I used the useEffect hook to fetch data after the component mounts and managed the data using useState. This ensured the data loads properly before rendering.

2. Handling Loading and Errors
   Initially, the app would crash or display nothing if the API took time to load or failed.

Solution:
I implemented loading and error states using useState. This allowed the app to display "Loading..." while fetching and show an error message if something went wrong.

3. Rendering Dynamic Data
   I had trouble displaying multiple users properly from the API response.

Solution:
I used the .map() function to loop through the users array and render a User component for each item. I also added a unique key (user.id) to avoid React warnings.

4. Component Structure
   At first, all code was inside App.js, making it messy and hard to manage.

Solution:
I created a separate User.js component to handle displaying individual user data, improving code readability and reusability.

Conclusion:
Through this lab, I learned how to fetch and display data from an API, manage component state, and structure a React application properly. This improved my understanding of asynchronous operations and component-based design in React.
