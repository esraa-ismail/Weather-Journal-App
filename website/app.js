//Global Variable
const button = document.getElementById('generate');

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+ 1 +'.'+ d.getDate()+'.'+ d.getFullYear();

//Creat fetch functioon
const storeData = async() =>{ 
    const APIkey = '70a298134e188b955e5cd13b7f1b2965';
    const zipCode = document.getElementById('zip').value;
    const passUrl = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${APIkey}`;
    const response = await fetch(passUrl); 
try{
    const newData = await response.json();
    const tempertur = newData.main.temp;

    const postData = async(url,data = {})=>{
        console.log(data)
        const response = await fetch('/save',{
            method : 'POST',
            credentials : 'same-origin',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(data)
        })
        try{
            const newData = await response.json
            return newData
           
        }catch(error){
            console.log('Error', error);
        }
    }
    const feeling = document.getElementById('feelings').value;
    postData('/data',{tempertur,newDate,feeling});
    const sendData = async() => {
        const send = await fetch('/data') 
        try{
            document.getElementById('temp').innerHTML =  newData.main.temp;
            document.getElementById('date').innerHTML = newDate;
            document.getElementById('content').innerHTML =   document.getElementById('feelings').value;
         }catch(err){
            console.log('the Erorr is', err);
        } } 
        sendData();

}catch(err){
    console.log('Erorr is',err)}
}

button.addEventListener('click',()=>{
    storeData();

});



