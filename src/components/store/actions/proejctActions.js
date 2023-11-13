export const createProject = (project) => {
    return (dispatch, getState) =>{
        //make sync call to database
        dispatch({type: 'CREATE_PROJECT' , project});
            
        
    }
}