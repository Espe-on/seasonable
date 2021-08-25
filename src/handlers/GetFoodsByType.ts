import {Food} from "../models/food";

export const getFoodsByType = (foodsList: Food[], type: string): Food[] => {
    return foodsList.filter(food => food.type.toLowerCase() === type.toLowerCase())
};
