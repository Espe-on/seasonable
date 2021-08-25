import {Food} from "../models/food";

export const lastsLessThan = (foodsList: Food[], days: string): Food[] => {
    const daysNumber = parseInt(days, 10)
    return foodsList.filter(food => food.daysFresh <= daysNumber)
};

export const lastsLongerThan = (foodsList: Food[], days: string): Food[] => {
    const daysNumber = parseInt(days, 10)
    return foodsList.filter(food => food.daysFresh > daysNumber)
};
