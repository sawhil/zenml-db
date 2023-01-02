# Instructions For Running

- Clone The Directory / Unzip The SourceCode
- Run "yarn" command to install the dependencies
- Run "yarn dev" to start the Dev Server and navigate to http://127.0.0.1:5173/ in your Browser


# Notes
- Used AntD Component Library
- API was CORS disabled so used dummy data but the logic is there
- Initially I thought of making a proxy server to proxy the requests from
- the client to the API Endpoint but that seemed overkill so used Dummy Data

# Question Asked

1. What is an ideal way to visualize a stack and a stack component?
- Ideal Way to Visualize a Stack is as a row and for components we can do it in two steps
- First is to show as a nested collapsed table for a stack and show minimal data and second is
- to pop up a modal or navigate to a seperate page to show the detailed configuration and data
- for the stack component



2. What is the easiest way to navigate these stacks and stack components when they are many of them?
- Using Dynamic Routing such as "/stacks/stack_id"  or "components/component_id"


3. How does one showcase the connection between a stack and its stack components?
- Using Nested Tables in which parent is the stack and child are the components
- or maybe we can group different types of components based on the component types


4. How can you as the frontend developer create a UI that is 'forward-facing', i.e., if the API adds more functions to create stacks and stack components in the future, how many changes will need to be made to cater to these changes.
- Since we want to keep it forward facing we should keep the ui components and logic as decoupled 
- as possible with the state. So in case of new stack being created we should send a creation
- request to BackEnd and simultaneously updating the state on FrontEnd while keeping a check on if the
- stack creationn is successfull or not and mutate the state accordingly and show proper propmt.
- Similar can be the case for Component Creation


## For bonus points..

If you have some time, please indicate your answers to the following questions. Please note you do NOT need to implement the functionalities asked:

1) How would you add the ability to create a stack and stack component to your application?
- For Create Operations we should keep a state to keep the data and a state for checking if
- the creation has happened on BackEnd or not and show the loader for the meantime until the
- creation is successfull or not and if it's successfull then update the stack data state with
- the data received from BackEnd

2) How would you add the ability to delete a stack and stack component to your application?
- For Delete Operation we can go ahead in the same way don't update the FrontEnd State until
- an acknowledgement has been received from the BackEnd to avoid Race Conditions.