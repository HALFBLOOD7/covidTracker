async function getdata(){
   var input = document.querySelector(".country");
   var confirm = document.querySelector(".numbers1");
   // var active = document.querySelector(".active");
   var death = document.querySelector(".numbers3");
   var recover = document.querySelector(".numbers2");
   var title = document.querySelector(".title")
   var country = input.value;
  //console.log(country);
   if(country == ""){
      alert("Pls input correct value")
   }
   try{
      const res = await fetch('https://covid19.mathdro.id/api/countries/'+ country)
      const data = await res.json()
      //console.log(JSON.stringify(data))
      confirm.innerHTML = data.confirmed.value;
      death.innerHTML = data.deaths.value;
      recover.innerHTML = data.recovered.value;
      // active.innerHTML = parseInt(data.confirmed.value-(data.recovered.value + data.deaths.value));
      title.innerHTML = input.value.toUpperCase();
      // input.value = "";
   }
   catch(e){
         alert("Country not found")
         input.value ="";
   }
  //alert(data.error.message)
  }