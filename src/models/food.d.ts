import {Month} from "./month"

export type FoodType = "Fruit" | "Vegetable";

export type StorageMethod = 'Fridge' | 'Cupboard' | 'Counter' | 'Freezer' | "to add";

export type Food = {
    name : string,
    type : FoodType
    months: Month[],
    daysFresh: number | "to add",
    storage: StorageMethod
    imageUrl?: string
    notes? :string
};
