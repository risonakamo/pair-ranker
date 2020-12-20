import _ from "lodash";

export default class IterableInsertionSorter
{
    items:SortItem[]
    currentIndex:number
    compareIndex:number

    currentComparison:ChoiceItemsInner|null
    userSelection:boolean|null

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

        this.currentComparison=null;
        this.userSelection=null;
    }
}

/** convert private inner choice items type to public type */
function publiciseChoiceItems(choices:ChoiceItemsInner):ChoiceItems
{
    return [
        choices[0].value,
        choices[0].value
    ];
}