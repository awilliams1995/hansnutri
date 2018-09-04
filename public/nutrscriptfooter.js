
if(document.querySelectorAll('.discount-price') && document.querySelectorAll('.discount-price')[0]){
    document.querySelectorAll('.discount-price')[0].innerText = document.querySelectorAll('.discount-price')[0].innerText.replace(/Y.*:/g,':')
}
document.addEventListener('DOMContentLoaded',()=>{
    let oldSlider = document.querySelector('#cwsBsSlider').innerHTML;
    setTimeout(()=>{
        document.querySelector('#cwsBsSlider').innerHTML = oldSlider;
    },2000)
})
