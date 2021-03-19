# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
   
   The context API avoids the problem of having to pass state to a child component through intermediate components. It does this by sharing a value across one tree of components.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    The Redux store holds all the data for the current application. It can take actions to make changes to state, and broadcasts those changes to any components that need it. Actions are functions that can be called to perform pre-determined actions in the store. Reducers take actions and perform the actual functions.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

    redux-thunk allows us to add asynchronous code to Redux. It changes our action-creators by allowing them to return a function instead of an object. This is called a "thunk". If it's a function, thunk will run it for us. These actions don't change state directly, instead they call actions for us.

4. What is your favorite state management system you've learned and this sprint? Please explain why!

    My favorite has been Redux! I liked Context too, and I think in a large project they would work best together. I love how Redux allows you to connect very separate components without having to manually wire them through other intermediate components, it's made it much easier to manage.