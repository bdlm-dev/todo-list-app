import AsyncStorage from '@react-native-async-storage/async-storage';

const LISTSKEY = "lists";
const TASKSKEY = "tasks";

const storeData = async (data, key) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
        console.log(`Error storing ${key}`);
        console.log(error);
    }
}

const fetchData = async (key) => {
    try {
        const rawData = await AsyncStorage.getItem(key);
        const parsedData = JSON.parse(rawData);
        return parsedData;
    } catch (error) {
        console.log(`Error fetching ${key}`);
        console.log(error)
        return null;
    }
}

const storeLists = async (lists) => {
    storeData(lists, LISTSKEY);
}

const getLists = async () => {
    return fetchData(LISTSKEY);
}

const storeTasks = async (tasks, hasLoaded=true) => {
    if (!hasLoaded) {
        return;
    }
    storeData(tasks, TASKSKEY);
}

const getTasks = async () => {
    return fetchData(TASKSKEY);
}

const storeAll = async(lists, tasks) => {
    storeLists(lists);
    storeTasks(tasks);
}

const clearAll = async () => {
    try {
        await AsyncStorage.clear();
        return;
      } catch (error) {
        console.log("Error clearing storage");
        console.log(error);
        return;
      }
}

export {
    storeLists, getLists,
    storeTasks, getTasks,
    storeAll, clearAll
}