const bouttons=document.querySelectorAll(".filter-btn");
// console.log(bouttons)
const menu=document.querySelectorAll(".menu-item")
// console.log(menu)

bouttons.forEach((button)=>{
    // console.log(button)عشان تعرف انك عملتها صح

    button.addEventListener("click", ()=>{
        const datacatgory=button.getAttribute("data-category")//عملنا متغير يقوم بتخزين نوع الداتاء كاتكوري وخزنا في البراميتر الذي اسمه بوتن
        // console.log(datacatgory)يعرض الكلمه عند ضغطها

        menu.forEach((item) =>{
            //console.log(menu) //  يعرض الا12 العنصر الذي في العمودين 
            if(datacatgory==="all" || datacatgory===item.getAttribute("data-category")){
                item.style.display = "flex";
            } else{
                item.style.display ="none";
                item.style.transition= "4s ";
            }

        });
    });
});
/*
datacatgory=breackfast عند الضغط على بريك فاست يصبح المتغير المخزن يدور ع الذي اسمه في الداتا كاتجوري بريك فاست
كذالك في اللنش 
وكذالك في الدينر 
*/