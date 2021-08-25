import {Food} from "../models/food";

export const getFoodsByMonth = (foodsList: Food[], month: string): Food[] => {
    // @ts-ignore
    return foodsList.filter(food => food.months.includes(month))
};
