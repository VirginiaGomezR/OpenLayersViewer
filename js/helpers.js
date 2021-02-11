const query = element => {
    return document.querySelector(element);
};

const setLocalStorageData = (key, value) =>{
  localStorage.setItem(key, value);
} 

const getLocalStorageData = (key) =>{
  return localStorage.getItem(key);
} 

export {query, setLocalStorageData, getLocalStorageData};