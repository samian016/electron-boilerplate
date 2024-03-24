import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useApiCtx } from "../api/ApiProvider";
import { setValue } from "../reduxRoot/globalReducers/userReducer";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const useUser = () => {
    const {user, loading} = useSelector((state)=>({
        user:state.userSlice.user,
        loading:state.userSlice.loading
    }), shallowEqual);
    const station = useApiCtx();
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
  const login = (raw) => {
    station.api({ name: 'logIn', body: { ...raw } })
    .then(({data})=>{
      dispatch(setValue({target:'user', value:data}));
      window?.capture?.loggedIn({id:data.id, name:data.name, email:data.email, role:data.role.name});
      navigate('/');
    })
    .catch((err)=>{
      console.log(err.message);
      toast.error(err.message);
    })
    .finally(()=>{
      dispatch(setValue({target:'loading', value:false}));
    });
    
  };


  useEffect(() => {
   station.api({name:"getOwn"})
   .then(({data})=>{
    dispatch(setValue({target:'user', value:data}));
    window?.capture?.loggedIn({id:data.id, name:data.name, email:data.email, role:data.role.name});
    // navigate('/');
   })
   .catch((e)=>{
    console.log(e.message);
   })
   .finally(()=>{
    dispatch(setValue({target:'loading', value:false}));
   });
  }, []);

  function logout(){
    station.api({name:"logOut"})
    .then(({data})=>{
     dispatch(setValue({target:'user', value:null}));
     window?.capture?.loggedOut();
     navigate('/auth');
    })
    .catch((e)=>{
     console.log(e.message);
    });
  }

  return {
    user,
    loading,
    login,
    logout
  };
};

export default useUser;