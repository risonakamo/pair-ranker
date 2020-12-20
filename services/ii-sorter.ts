import _ from "lodash";

import ComparisonSaver from "./compare-save";

export default class IterableInsertionSorter
{
    private items:SortItem[]
    private currentIndex:number
    private compareIndex:number

    private currentComparison:ChoiceItemsInner|null

    private csaver:ComparisonSaver

    private done:boolean

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

        this.csaver=new ComparisonSaver;

        this.done=false;
    }

    choice():ChoiceItems|null
    {
        if (this.done)
        {
            return null;
        }

        if (this.currentComparison)
        {
            return publiciseChoiceItems(this.currentComparison);
        }

        this.setChoice();

        return this.choice();

    }

    choose(choice:number):void
    {
        if (this.done)
        {
            return;
        }

        this.csaver.makeCompare(this.items[this.currentIndex],this.items[this.compareIndex],choice);
        this.currentComparison=null;
        this.setChoice(true);
    }

    getResult():string[]
    {
        return _.map(this.items,(x:SortItem)=>{
            return x.value;
        });
    }

    private setChoice(compareCurrent:boolean=false):void
    {
        if (this.done)
        {
            return;
        }

        if (!compareCurrent)
        {
            this.compareIndex--;
        }

        if (this.compareIndex<0)
        {
            this.insertInto(-1);
            this.setChoice();
        }

        // compare the current index with the new compare item
        var comparison:ChoiceItemsInner=[this.items[this.currentIndex],this.items[this.compareIndex]];
        var autoCompare:number|null=this.csaver.compare(...comparison);

        // if the auto compare failed, we have never seen this comparison before. so set it as the current comparison
        // and await an compare
        if (!autoCompare)
        {
            this.currentComparison=comparison;
        }

        // if the auto compare was >=0, perform a swap. otherwise, proceed with setting the choice.
        else if (autoCompare>=0)
        {
            this.insertInto(this.compareIndex);
            this.setChoice();
        }

        // if auto compare was <0, then continue moving the compare index.
        else
        {
            this.setChoice();
        }
    }

    /** move the current item to the specified position in the items array. only works if the new position
     *  is before the current position. also advances the current pointer */
    private insertInto(position:number):void
    {
        if (position+1==this.currentIndex)
        {
            this.advanceCurrent();
            return;
        }

        var currentItem:SortItem=this.items[this.currentIndex];

        _.remove(this.items,(x:SortItem)=>{
            return x.index==this.currentIndex;
        });

        this.items.splice(position+1,0,currentItem);

        this.advanceCurrent();
    }

    /** advance the current pointer and set the compare index.*/
    private advanceCurrent():void
    {
        this.currentIndex++;
        this.compareIndex=this.currentIndex;

        if (this.currentIndex>=this.items.length)
        {
            this.done=true;
        }
    }

    /** compare saver testing */
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
        choices[1].value
    ];
}