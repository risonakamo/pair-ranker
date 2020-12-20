export default class ComparisonSaver
{
    savedComparisons:SavedComparisons

    constructor()
    {
        this.savedComparisons={};
    }

    /** attempt to compare sort items with a saved comparison. if there was no saved comparison, fails and
     *  returns null. */
    compare(item1:SortItem,item2:SortItem):number|null
    {
        var indices:ExtractedIndicesResult=extractCompareIndices(item1,item2);

        if (!this.savedComparisons[indices.indicesString])
        {
            return null;
        }

        var inversionModifier:number=indices.flipped?-1:1;

        return this.savedComparisons[indices.indicesString]*inversionModifier;
    }

    /** save a comparison into the saved comparisons. */
    makeCompare(item1:SortItem,item2:SortItem,result:number):void
    {
        var indices:ExtractedIndicesResult=extractCompareIndices(item1,item2);

        var inversionModifier:number=indices.flipped?-1:1;

        this.savedComparisons[indices.indicesString]=result*inversionModifier;
    }
}

/** extract indicies from sort items to be compared. indicies will always be in ascending order.
 *  sets flipped to be true if the indicies were flipped in order to obtain ascending order. */
function extractCompareIndices(item1:SortItem,item2:SortItem):ExtractedIndicesResult
{
    var indices:CompareIndices=[
        item1.index,
        item2.index
    ];

    var sortIndices:CompareIndices=[...indices].sort() as CompareIndices;

    return {
        indices:sortIndices,
        indicesString:sortIndices.join(","),
        flipped:sortIndices==indices
    };
}