import { getAccessToken } from "../utils/localStorageServices";
export const getApi = async (url) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${getAccessToken()}`);
    var data;    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch(`${process.env.REACT_APP_URL}/${url}`, requestOptions)
      .then(response => response.text())
      .then((result)=>{
        data=result;
      })
      .catch(error => console.log('error', error));
      return data;
}