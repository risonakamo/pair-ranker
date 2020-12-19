import _ from "lodash";

export default class IterableInsertionSorter
{
    items:SortItem[]
    currentIndex:number
    compareIndex:number

    constructor(items:string[])
    {
        this.items=_.map(items,(x:string,i:number)=>{
            return {
                value:x,
                index:i
            };
        });

        this.currentIndex=1;
        this.compareIndex=1;
    }
}