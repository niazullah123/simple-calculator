    
let result = document.getElementById("inputText");

    let calculate=(number)=>{
    result.value+=number;
    } 

    let calculate2=()=> {
      try {
        result.value = eval(result.value);
      } 
      catch (error) {
        alert('Enter a valid input')
      }
    }

    function clearDisplay() {
      document.getElementById('inputText').value = '';
    }
