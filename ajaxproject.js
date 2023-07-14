dataBtn = document.getElementById('dataDoc');
dataFetch = document.getElementById('dataFetch');


dataBtn.addEventListener('click', ()=>{
    abc = new XMLHttpRequest();

    abc.open('GET', 'https://fakestoreapi.com/products', true);
    abc.onload=function(){
        dataJavaScript = JSON.parse(this.responseText);

        data = `
        <thead class="table-dark">
            <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Category</th>
                <th>Images</th>
                <th>Description</th>
            </tr>
        </thead>`;

        for(x in dataJavaScript){
            data += `
            <tr>
                <td>${dataJavaScript[x].title}</td>
                <td>${dataJavaScript[x].price}</td>
                <td>${dataJavaScript[x].category}</td>
                <td><img src="${dataJavaScript[x].image}"></td>
                <td>${dataJavaScript[x].description}</td>
            </tr>`;
        }
        dataFetch.innerHTML=data;
    }

    abc.send();
})