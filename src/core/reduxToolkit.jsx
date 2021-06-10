export default function reduxToolkit ({initialStale,reducers ={}, name}){
    let action ={}
    let TYPE ={}

    for(let i in reducers){
        let type =`${name}/${i}`

        action[i] =(data)=>{
            return{
                type,
                payload:data
            }
        }
        TYPE[i] =type
    }
    function reducer(state=initialStale,action){
        let type =action.type.split('/')[1]
        if(type in reducers){
            return reducers [type](state.action)
        }
        return state;
    }

    return{
        action,
        reducer,
        TYPE
    }
}