import { useEffect} from 'react';

import  ApplicationUserManager  from '@/shard/ids4-oidc-login/IdentityServerLogin';

const Callbackpage = (props: { history: any }) => {
  // const [loading, setLoad] = useState(true);
  const loginCallbackFn = async () => {
    debugger
    await ApplicationUserManager.signinRedirectCallback();
    const user = await ApplicationUserManager.getUser();
    debugger
    if (user !== null && typeof user.access_token !== "undefined") {
      localStorage.setItem("token", user.access_token);
      debugger
      // getMenus();
      props.history.push("/home");
      // setLoad(false);
      props.history.go();
    }
  }
  useEffect(() => {
    loginCallbackFn();
  })
  return (
    <div>
      
    </div>
  )
}

export default Callbackpage;
