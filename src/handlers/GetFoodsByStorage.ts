import {Food} from "../models/food";

export const getGoodsByStorage = (foodsList: Food[], storeage: string): Food[] => {
    return foodsList.filter(food => food.storage.toLowerCase() === storeage.toLowerCase())
};
