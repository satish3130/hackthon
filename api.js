
async function customerNationality() {
    const info = document.createElement("div");
    info.setAttribute("class", "container");
    document.querySelector(".customerdetails").innerHTML = ``;
  
    const name = document.querySelector(".custname").value;
    document.querySelector(".custname").value = null;
  try{
    const data = await fetch(`https://api.nationalize.io/?name=${name}`, {
      method: "GET"
    });
    const customer = await data.json();
    console.log(customer);
  
    let len = customer.country.length;
    if (len == 0) {
      info.innerHTML = `<h4>Name: ${customer.name}</h4> <p>unable to locate the nationality</p>`;
    } else {
      info.innerHTML = `<h4>Name: ${customer.name}</h4>`;
      for (let i = 0; i < len; i++) {
        if (i <= 1) {
          info.innerHTML += `<div class="details-container">
    <p>Country: ${customer.country[i].country_id}            Probability: ${customer.country[i].probability}</p>
    </div>`;
        }
      }
    }
    document.querySelector(".customerdetails").append(info);}
    catch(err){
        document.querySelector(".customerdetails").append("Missing name parameter");
    }
  }
  