import {Month} from "./month"

export type Fruit = {
    name : string,
    months: Month[],
    daysFresh: number,
    storage: 'Fridge' | 'Cupboard' | 'Counter' | 'Freezer',
    imageUrl?: string
    notes? :string
};
