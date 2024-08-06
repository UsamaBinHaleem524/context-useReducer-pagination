const reducer=(state,action)=>{
   switch(action.type){
       case "GET_Stories":
        return{
          ...state,
          hits:action.payload.hits,
          nbPages:action.payload.nbPages,
          isLoading:action.payload.isLoading,
          page:action.payload.pg,
        }
        case "REMOVE_OBJECT":{
          return {
            ...state,
             hits:state.hits.filter((hit)=>hit.objectID!==action.payload)
          }
        }
        case "Search_Post":{
          return {
            ...state,
            query: action.payload,
          }
        }
        case "Next_Page":{
          let Page=state.page+1;
          if(Page>=state.nbPages){
            Page=1;
          }
          return{
            ...state,
            page:Page,
          }
        }
        case "Prev_Page":{
          let Page=state.page-1;
          if(Page<=0){
            Page=0;
          }          
          return{
            ...state,
            page:Page,
          }
        }
    default: 
    return state;
   }
   
}


export default reducer;