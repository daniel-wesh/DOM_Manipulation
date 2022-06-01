// const content=document.querySelector('p')

// console.log(content.classList)
// content.classList.add('error')
// content.classList.remove('error')

// content.classList.add('success')
 
const paras = document.querySelectorAll('p')

paras.forEach(para=>{
    if(para.textContent.includes('Error')){
        para.classList.add('error')
    }
    if(para.innerText.includes('Success')){
        para.classList.add('success')
    }
})

const title=document.querySelector('.title')
title.classList.toggle('test')
