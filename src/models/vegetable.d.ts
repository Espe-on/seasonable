import {Month} from "./month"

export type Vegetable = {
    name : string,
    months: Month[],
    daysFresh: number | "to add",
    storage: 'Fridge' | 'Cupboard' | 'Counter' | 'Freezer' | "to add",
    imageUrl?: string
    notes? :string
};
