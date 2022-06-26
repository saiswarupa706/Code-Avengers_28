import {initializeApp} from 'C:\Users\SAI SWARUPA\Desktop\ONE PAGE LAYOUT\node_modules';
const firebaseConfig = {
    apiKey: "AIzaSyAHKa3N0wGAlqWBeIHhC_mzuyF3RsWdz40",
    authDomain: "hastanta-31ce9.firebaseapp.com",
    projectId: "hastanta-31ce9",
    storageBucket: "hastanta-31ce9.appspot.com",
    messagingSenderId: "1061742358897",
    appId: "1:1061742358897:web:4ec1199554b63c3974c6d0",
    measurementId: "G-50JB7Q70EF"
  };
  const app=initializeApp(firebaseConfig);
  
var LoginformDB=  firebaseConfig.database.ref('Loginform');
document.getElementById('login').addEventListener("submit",submitform);

function submitform(e){
    e.preventDefault();
    console.log('entered')
    var email=getElementVal('email');
    var psw=getElementVal('psw');
    console.log(email,psw)
    
}

  

const getElementVal=(id)=>{
return document.getElementById(id).value;
};