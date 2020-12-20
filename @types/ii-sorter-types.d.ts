interface SortItem
{
    value:string
    index:number
}

/** left is CURRENT (C) item, right is COMPARE (CP) item. the user should return
 *  1 to indicate C>CP or 0 for C<CP.
 */
type ChoiceItemsInner=[SortItem,SortItem]

/** choice items type for users. only includes values of choices */
type ChoiceItems=[string,string]