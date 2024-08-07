import { useContext, useEffect } from "react";
import DefaultLayout from "../config/layout/DefaultLayout";
import { UserContext } from "../contexts/UserContexts";
import { useNavigate } from "react-router-dom";

function Home() {
  const config = {
    navigation: true,
    footer: true
  }
  
  const navigate = useNavigate()
  const userContext = useContext(UserContext)
  
  useEffect(()=>{
    if(userContext?.data.user === ''){
      navigate('/')
    }
  }, [])

  return (
    <DefaultLayout config={config}>
      <h1>Home</h1>
    </DefaultLayout>
  )
}

export default Home;
