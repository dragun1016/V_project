// function animation(){
//     let array = []

//     for (i = 0;i<9;i++){
//         let rand = Math.floor(Math.random() * 10);
//         console.log(rand)
//         if (Math.floor(Math.random() * 2) == 1){
//             rand = 100 - rand
//         }else{
//             rand = 100 + rand
//         }
//         array.push(rand)
//     }

//     console.log(array)

//     console.log(Math.floor(Math.random() * 2))

//     window.getComputedStyle(document.querySelector("article"), '::after').borderRadius =`${array[0]}% ${array[1]}% ${array[2]}% ${array[3]}% / ${array[4]}% ${array[5]}% ${array[6]}% ${array[7]}%`

//     requestAnimationFrame(animation)
// }

// animation()
/**
 * @param {string}id 유저ID쓰세요
 */
userPage = (_id) => {
    let url = new URL(location.href);
    id = url.searchParams.get("id");
    if (id == null){
        id = 0;
    }

    if (id != _id){
        location.href = `?id=${_id}`;
    }
}