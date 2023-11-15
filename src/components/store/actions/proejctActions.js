export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) =>{
        //make sync call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.id;
        firestore.collection('projects').add({
            ...project,
            authorFirstname: profile.firstName,
            authorLastname: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
            })
            then(() =>{
            dispatch({type: 'CREATE_PROJECT' , project});
            }).catch((err) =>{
            dispatch({ type: 'CREATE_PROJECT_ERROR', err });
           })
       
            
        
    }
}