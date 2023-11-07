// Sample list used when creating new list
let defaultList =  {
    label: "Sample List",
    categories: [
        {label: "TODO", value: "todo"},
        {label: "In Progress", value: "wip"},
        {label: "Complete", value: "complete"}
    ]
};

// Dictionary of list by key: {label, subcategories}
// Could be better implemented as just array with key as another named attribute like label, subcategories
let listsData = {
    "uni": {
        label: "University List",
        categories: [
            {label: "TODO", value: "todo"},
            {label: "In Progress", value: "wip"},
            {label: "Complete", value: "complete"}
        ]
    },
    "shopping": {
        label: "Shopping List",
        categories: [
            {label: "Normal", value: "normal"},
            {label: "URGENT", value: "urgent"}
        ]
    }
};

// Default task used when creating new tasks to fill in data
const defaultTask = {
    id: 0,
    label: "Sample",
    desc: "",
    category: "",
    subcategory: "",
    complete: false,
}

// Storage of all tasks- I would rather this be on the back-end and part of a database
// Rather than hardcoded into the js or saved via the js in frontend
// Array of each task with details of: id, label, description, list(category), subcategory, complete
let tasksData = [
    {
        id: 0,
        label: "TODO Uni Task 1",
        desc: "",
        category: "uni",
        subcategory: "todo",
        complete: false,
    },
    {
        id: 1,
        label: "Unassigned Shopping Task",
        desc: "wowie",
        category: "shopping",
        subcategory: "",
        complete: false,
    },
    {
        id: 2,
        label: "TODO Uni Task 2",
        desc: "extra words",
        category: "uni",
        subcategory: "todo",
        complete: false,
    },
    {
        id: 3,
        label: "In Progress Uni Task 1",
        desc: "extra words",
        category: "uni",
        subcategory: "wip",
        complete: false,
    },
    {
        id: 4,
        label: "Unassigned Uni Task 1",
        desc: "extra words",
        category: "uni",
        subcategory: "",
        complete: false,
    },
    {
        id: 5,
        label: "Urgent Shopping Task 1",
        desc: "get some eggs",
        category: "shopping",
        subcategory: "urgent",
        complete: false,
    },
    {
        id: 6,
        label: "Complete Uni Task 1",
        desc: "finish 1004 :)",
        category: "uni",
        subcategory: "complete",
        complete: true,
    }
];

// Might not be necessary,
// but doing this to be safe 
// when fetching tasks data
const getTasks = () => {return tasksData};

// Add new task to tasksData
// Create 'copy' of the template then fill in values
// As specified by input parameters, then push to storage
const addTask = (taskData) => {
    let newTask = {...defaultTask};
    newTask.id = tasksData.length;
    newTask.label = taskData.label;
    newTask.category = taskData.category;
    tasksData.push(newTask);
}

// Return array of [key, val] of the lists available
// e.g. ['uni', 'University List'], ['shopping', 'Shopping List']
// To be used in the dropdown picker as required by that package
const getListItems = (lists) => {
    if (lists === undefined) return [{}];
    let pairs = [];
    for (const [key, val] of Object.entries(lists)) {
        pairs.push({label : val.label, value: key});
    }
    return pairs;
}

// TODO: implement adding new subcategory for current list
// TODO: implement adding new lists

export { 
    listsData, getListItems,
    tasksData, addTask, getTasks
}