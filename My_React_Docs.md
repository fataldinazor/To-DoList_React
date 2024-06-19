\*\*React

\*Components
React apps are made out of components.
Components is a piece of UI that has its own logic and appearance.
React components are always created with Capitalized letters.

\*JSX
Used in React as the Markup Language.
JSX contains both rendering logic and content in the same place(component).
Lets you escape back into the JS with {}.
To pass objects you'll need to use {{}} as one for JS declaration and the other for the object declaration.
Similarly for when you need to do inline CSS, you'll pass an object to the style attribute, style={{}}.

\*Conditional Rendering
No special syntax for writing conditions, Using 'if-else' or '?:' is preferred.
Also && can be used when else branch us not needed.
Don’t put numbers on the left side of &&.
you can also conditionally assign JSX to a variable.

\*Rendering List
For rendering lists for and .map() functions are used.
Arrays are automatically rendered in React.

\*Keys
JSX elements directly inside a map() call always need keys.
For each item in a list we have used a "key". This should be unique and should be coming from your database, this will be useful for CRUD operations to know what happened with the item.
Keys tell React which array item each component corresponds to, so that it can match them up later.
Keys should be consistent and they Unique.
Keys passed into the component or DOM element as a prop.
<div key={keyValue}>.
Don't use index as the key when list is Dynamic ie. the list is being added with new items.

\*Sharing data between components
For Two buttons to display the same count, you'll need to move upward to their closest component. and make changes to that component such that both the buttons are synced;

\*Data Transfer in React
Data transfer in react is unidirectional, which means that it only moves from parent to child and only moves in that direction.
Data changes will only affect Child components and not parent or sibling Components.

\*Props
React components use props to communicate with each other.
They serve the same role as arguments serve for the functions., they are arguments to react components.
Parent Component can pass some information to its child components by giving them props.
Any JS value can be passed including objects, arrays and functions.

\*Familiar Props
Props are the information that you can pass to a JSX tag. Eg.ClassName, src, alt etc.

\*Passing props to a component
(i)Pass abject and number in the Parent component
(ii)you can read these props in the child listing their names separated by a comma
eg-> function Avatar({person, size}){
//rest of the program
}
Props let the parent adn child work independently, you can change any info in the both the components and it won't crash the code.

\*How Props change over time
Props are immutable(they are unchangeable), thus whenever a component needs to change its prop it will call the parent component to pass a new prop(a new Object).

\*State
State is local to a component on the screen ie. if you render the same component twice, each copy will have completely isolated state.
State is fully private to the component declaring it.

\*useState
Add state to your components to make them remember some info you might need later or to display it.
Use {useState} for that.
Declare a state variable inside your component.
you will get two things from 'useState'
(i) The current state
(ii) The function that lets you update the variable

\*Working of State
When a component's state or props change the, the component in destroyed and recreated from scratch.
The entire component is recreated but this time the latest state value will be returned from useState. This process is called rerendering.


\*Giving a component multiple state variables 
Recommended to have multiple state variables if their state is unrelated.
Only when two variables change together combine them.

\*Hooks
Hooks are special functions that are only available while React is rendering.
Functions starting with 'use' are called hooks, eg->useState is built in hooks.
They are restrictive than other functions. You can write your own hooks combining them with existing ones.
If you want to use hooks in condition or loop then extract new components and put it here.

\*Hook Rules
(i) Hooks can only be called from the top level of a functional component.
(ii) Hooks can't be called from inside loops or conditions.

\*How Rendering works in React
React only changes the DOM nodes if there’s a difference between renders.  

\*Render and Commit
The process of requesting adn serving the UI consist of 3 steps
(i) Triggering a render.
(ii) Rendering the component-> calling Components.
(iii) Committing to the DOM-> modifying the DOM

\*Rendering must always be a pure calculation.
(i) Same Input, Same output;
(ii) Minds its own business ie does not change any objects or variables that existed before rendering.

\*Committing to the Render
(i) For the initial render-> react will use appendChild API to put all the DOM nodes that it has created on screen.
(ii) For re-renders-> react will apply minimal necessary operations (calculated while rendering) to make the DOM match the latest Output.

\*Virtual DOM
Virtual DOM is a lightweight in-memory representation of the real DOM, which allows React to make changes to the UI without manipulating the actual DOM.
This makes it faster because changing the virtual DOM is less expensive than changing the real DOM.

\*React Reconciliation Algorithm
The Process of rerendering generates a new virtual DOM tree. The Virtual DOM tree is lightweight representation of the actual DOM that react uses to keep the track of changes in the current State of UI. React then compares new Virtual DOM to the previous one to calculate the minimal set of changes needed to update the actual DOM.

The Algorithm uses two main techniques to optimize the updates:
(i) Tree Diffing: compares the current virtual DOM with the updated virtual DOM tree, and identifies the minimum number of changes that are necessary to bring the virtual DOM in line with the updated state.
(ii) Batching: It batches multiple changes into a single update, reducing the number of updates to the virtual DOM and in turn the real DOM.

Reconciliation Algorithm is what makes react performance and helps build one of the fastest and most efficient JS Libraries for building UI.

\*How state updates
State updates are asynchronous. This implies that whenever setState is called react will update in the next component render. 
The components are reactive and not the state variables, meaning calling setState re-renders the entire component instead of just changing the state variable on the fly.

\*How to Structure State
State should be immutable: Primitive values are already immutable,but if using reference-type values ie arrays and objects, never mutate them.
Treat the state as if it was immutable.
to change the sate always use the setState function.

Recommended Approach->
(i) Group related state->if some two state variables always change together, it might be a good idea to unify them into a single state variable.
Eg. const [position, setPosition] = useState({ x: 0, y: 0 });
(ii) Avoid contradictions in state.
(iii) Avoid Redundant State-> If you can calculate some information from the components props or it's existing state variable during rendering then don't put that info into components state.
(iv) 