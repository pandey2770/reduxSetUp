export const clickUser= (user)=>{
  console.log('You clicked',user.first)
    return {
      type:"USER_CLICKED",
      data:user
    }

};