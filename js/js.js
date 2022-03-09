function search(){
    let search = document.querySelector('#search');
    let content = Array.from(document.querySelectorAll('.content','content2'));
    search.value = search.value.toLowerCase();
    content.forEach(function(appear){
        let text = appear.innerText;
        if (text.indexOf(search.value)>-1)
        appear.style.display="";
        else appear.style.display="none";
    })
}
//Hiện thị văn bản ra HTML
document.getElementById('js').innerHTML = 'Wellcome to Javascript'

let a = x,
    b = y;

