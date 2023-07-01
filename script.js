const cardcontainer=document.getElementById("container");

async function fetchdata(){
    try{
        const response=await fetch("https://gauravgitacc.github.io/postAppData/auctionData.json",{method:"GET"})
        const result=await response.json();
        console.log(result);
        renderelement(result);
    }
    catch(error){
        alert(error.message)
    }
}
fetchdata()

function renderelement(data){
    data.forEach(item => {
        // const {status,casenumber,date,fromlocation,tolocation,fare}=item;
        let card=  document.createElement("div");
        let bccolor={
            "APPROVED":"green",
            "PENDING":"yellow",
            "CANCELLED":"red",
            "COMPLETED":"blue"
        }
        card.className="card";
  card.innerHTML=`
  <div class="uppercard">
      <div class="up">
          <p id="approve" style="background-color:${bccolor[item.status]}" >${item.status}</p>
          <b id="time">${item.date}</b>
      </div>
      <p id="loc">${item.caseNumber}</p>
  </div>
  <div class="lowercard">
      <b>${item.fromLocation}</b>
      <p id="p">${item.toLocation}</p>
      <p id="rupee">${item.fare}</p>
  </div>

`;

cardcontainer.appendChild(card);
document.cookie=`data=${JSON.stringify(item)};path:/card.html`;

card.addEventListener("click",displaycard);
        
    });
  

}

function displaycard(e){
 const a=document.createElement("a");
 a.href="./card.html"
 a.target="_blank"
a.click();
e.stopPropagation();
console.log(e.target)
}

