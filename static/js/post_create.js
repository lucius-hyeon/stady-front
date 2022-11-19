let category =''
    const changeValue = (target)=>{
        let num= target.value
        if (num == 1){ 
            category = 'board'
        }else if(num ==2){
            category = 'blind'
        }else{
            category ='bamboo'
        }  
    }

post_create = async() =>{
    let title = document.getElementById('title').value
    let content = document.getElementById('content').value
    console.log(title, content, category)
    
    const response = await fetch('http://127.0.0.1:8000/blind/category/'+category+'/', {
        headers: {
            'content-type': 'application/json',
            "Authorization": "Bearer " + localStorage.getItem("access"),
        },
        method: 'POST',
        body: JSON.stringify({
            "title":title,
            "category":category,
            "content":content
        })
    })
    console.log(response)
    if (response.status === 201){
       if(response.category == 'blind'){
        window.location.href ='http://127.0.0.1:5500/stady-front/community/blind.html'
       }else if(response.category == 'board'){
        window.location.href ='http://127.0.0.1:5500/stady-front/community/index.html'
       }else{
        window.location.href ='http://127.0.0.1:5500/stady-front/community/index.html'
       }
       
    }
}

