import _ from "lodash";

import ComparisonSaver from "./compare-save";

export default class IterableInsertionSorter
{
    items:SortItem[]
    currentIndex:number
    compareIndex:number

    currentComparison:ChoiceItemsInner|null
    userSelection:boolean|null

    csaver:ComparisonSaver

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

        this.csaver=new ComparisonSaver;
    }

    private csaverTest():void
    {
        console.log(this.csaver.compare(this.items[0],this.items[1])); //2,1?
        this.csaver.makeCompare(this.items[0],this.items[1],-1); //2,1->1
        console.log(this.csaver.compare(this.items[0],this.items[1])); //2,1?
        console.log(this.csaver.compare(this.items[1],this.items[0])); //1,2?
        console.log(this.csaver.compare(this.items[0],this.items[0])); //2,2?
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