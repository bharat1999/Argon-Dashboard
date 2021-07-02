


function getData() {
    axios.get("https://run.mocky.io/v3/d53400a3-6126-495e-9d16-0b4414b537b3")
      .then(function(r){
        var str = "}"
        var res = JSON.parse(r.data.concat(str))
        // res.json(r)
        console.log(res)
        show(res)
      })
      .catch(function(e){
        console.log(e)
      })
}

getData()


function show(data) {
    let tab 
    
    // Loop to access all rows 
    for (let r of data.clients) {
        tab += `<tr>
        <td class="text-primary font-weight-bold">
          ${r.id}
        </td>
        <td>
        ${r.name}
        </td>
        <td>
            ${r.company}
        </td>
        <td>
            ${r.orderId}
        </td>
        <td>
            ${r.invoicepaid}
        </td>
        <td>
            ${r.invoicePending}
        </td>
      </tr>`;
    }
    // Setting innerHTML as tab variable
    console.log("done")
    document.getElementById("tableBody").innerHTML = tab;
    document.getElementById("t1").classList.remove("d-none")
}
