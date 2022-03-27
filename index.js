const starList = document.querySelectorAll('.stars a');

starList.forEach((star , i) =>{
    star.addEventListener('click', () => {
        console.log('clicked index is ' + i);
        starList.forEach((otherStar,other) => {
            if (other<=i){
                otherStar.classList.add('active')
                console.log(otherStar)

            }
        })
        // for (let x=i;x>=0;x++){
        //     var ids = "s"+i;
        //     let idf = document.getElementById(ids);
        //     idf.style.opacity = 100
        //     console.log('ids' + ids)
            

        // }
    })
} )