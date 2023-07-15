

      

async function getapi(val) {
   
   
     
    const response = await fetch( "https://anapioficeandfire.com/api/books?name="+val);
   
    
    var data = await response.json();
    console.log(data);
    for (let r of data) {
        r.characterlist=[];
    for(var i=0;i<r.characters.length&&i<5;i++)
    {
        const response1 = await fetch(r.characters[i]);
   
    
        var data1 = await response1.json();
        console.log(data1);
        r.characterlist.push(data1.name);
    }}
   
    if (response) {
        hideloader();
    }
    show(data);
}

getapi("");
 function search(){
    var val=document.getElementById("BOOKNAME").value;
    getapi(val);
 }

function hideloader() {
    document.getElementById('loading').style.display = 'none';
}

function show(data) {
    let tab =
        `<tr>
          <th>Book Name</th>
          <th>isbn</th>
          <th>Number of pages</th>
          <th>Author of book</th>
          <th>Publisher name</th>
          <th>Released date</th>
          <th>character name</th>
         </tr>`;
   
    
    for (let r of data) {
        tab += `<tr>
    <td>${r.name} </td>
    <td>${r.isbn}</td>
    <td>${r.numberOfPages}</td>
    <td>${r.authors.toString()}</td>         
    <td>${r.publisher}</td> 
    <td>${r.released}</td> 
    <td>${r.characterlist.toString()}</td> 


</tr>`;
    }
    
    document.getElementById("BOOK").innerHTML = tab;

}
