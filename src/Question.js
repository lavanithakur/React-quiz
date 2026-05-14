export const questions = [
  {
    id: 1,
    question: "What is the virtual DOM in React?",
    options: [
      "A physical representation of the DOM",
      "A lightweight JavaScript representation of the DOM",
      "A database for storing DOM elements",
      "A CSS framework for styling",
    ],
    correct: 1,
    explanation:
      "The virtual DOM is a programming concept where a virtual representation of the UI is kept in memory and synced with the real DOM by libraries like React.",
  },
  {
    id: 2,
    question: "Which hook is used for state management in functional components?",
    options: ["useEffect", "useContext", "useState", "useReducer"],
    correct: 2,
    explanation:
      "useState is the primary hook for managing local state in functional components. It returns a state variable and a setter function.",
  },
  {
    id: 3,
    question: "What does JSX stand for?",
    options: [
      "JavaScript XML",
      "Java Syntax Extension",
      "JavaScript Extension",
      "Java Standard XML",
    ],
    correct: 0,
    explanation:
      "JSX stands for JavaScript XML. It allows you to write HTML-like syntax in JavaScript.",
  },
  {
    id: 4,
    question: "Which method is used to update state in a class component?",
    options: ["this.updateState()", "this.setState()", "this.changeState()", "this.modifyState()"],
    correct: 1,
    explanation:
      "this.setState() is used to update state in class components. It merges the provided object with the current state.",
  },
  {
    id: 5,
    question: "What is the purpose of useEffect hook?",
    options: [
      "To manage component state",
      "To perform side effects in functional components",
      "To create context providers",
      "To memoize expensive computations",
    ],
    correct: 1,
    explanation:
      "useEffect is used to perform side effects like data fetching, subscriptions, or DOM manipulation in functional components.",
  },
  {
    id: 6,
    question: "What is the correct way to pass data from parent to child in React?",
    options: ["Using state", "Using props", "Using context only", "Using Redux only"],
    correct: 1,
    explanation:
      "Props (properties) are used to pass data from a parent component to a child component in React.",
  },
  {
    id: 7,
    question: "Which lifecycle method is equivalent to componentDidMount using hooks?",
    options: [
      "useEffect(() => {}, [state])",
      "useEffect(() => {})",
      "useEffect(() => {}, [])",
      "useLayoutEffect(() => {}, [])",
    ],
    correct: 2,
    explanation:
      "useEffect with an empty dependency array [] runs only once after the initial render, mimicking componentDidMount.",
  },
  {
    id: 8,
    question: "What does the key prop do in React lists?",
    options: [
      "Styles list items",
      "Helps React identify which items changed, were added, or removed",
      "Encrypts the list data",
      "Sorts the list automatically",
    ],
    correct: 1,
    explanation:
      "The key prop helps React identify which items in a list have changed, been added, or removed, enabling efficient re-rendering.",
  },
];
