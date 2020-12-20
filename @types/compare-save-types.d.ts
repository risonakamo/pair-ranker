interface SavedComparisons
{
    // key is actually CompareIndices converted to a string. value is 1,0,or -1,
    // representing the comparison of the FIRST VALUE TO THE SECOND VALUE
    [comparedIndices:string]:number
}

/** the indexes of 2 items to be compared. */
type CompareIndices=[number,number]

interface ExtractedIndicesResult
{
    indices:CompareIndices
    indicesString:string
    flipped:boolean
}