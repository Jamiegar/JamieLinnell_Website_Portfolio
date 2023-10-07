
const accordionItemHeaders = document.querySelectorAll(".accordionItemHeader");

accordionItemHeaders.forEach(accordionItemHeader => 
{
    accordionItemHeader.addEventListener("click", event => 
    {
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        
        accordionItemHeader.classList.toggle("active");
        accordionItemBody.classList.toggle("active");
        
        if(accordionItemBody.classList.contains("active"))
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        else
            accordionItemBody.style.maxHeight = 0;
    });
});