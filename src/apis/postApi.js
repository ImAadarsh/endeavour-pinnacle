export const postApi = async (data,url) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var status = 200;
    var raw = JSON.stringify(data);
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    console.log(`${process.env.REACT_APP_URL}/${url}`)
    await fetch(`${process.env.REACT_APP_URL}/${url}`, requestOptions)
    .then((response)=>{
        status=response.status;
        return response.json();
    })
    .then((result)=>{
        console.log(result)
    })
    .catch(error => console.log('error', error));
    return status;
}