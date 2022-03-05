let data = [
    {
        id: 1,
        imageUrl:'https://s3-eu-west-1.amazonaws.com/emap-nibiru-prod/wp-content/uploads/sites/2/2022/02/09145348/7-8.jpg' ,
        title: 'Shop online Footwear',
        title2:'See you collection Footwear',

    },
    {
        id: 2,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP7fNdVvjZuhHdefRGy2j0sQxRY84thgQSKw&usqp=CAU',
        title: 'Shop online Apparel',
        title2:'See you collection Apparel',
    },
    {
        id: 3,
        imageUrl: 'https://i.pinimg.com/736x/74/3d/cb/743dcb5d807b0599f759c86ab0d732c9.jpg',
        title:'Shop online Accessories',
        title2:'See you collection Accesories',
    },
    {
        id: 4,
        imageUrl: 'https://images.squarespace-cdn.com/content/v1/5837a368bebafb4b230be604/1481015038904-77KMG4OEY4PPXR073225/Quel-International-Hospitality-Commercial-Furniture-Kettal.png?format=1000w',
        title: 'Shop online Furniture',
        title2:'See you collection Furniture',
    }


]


let arrowLeft = document.getElementById('left-button');
let arrowRight = document.getElementById('right-button');
let sliderContent = document.getElementById('slider-content');
let dotsList = document.getElementsByClassName('dot');




let sliderIndex = 0;


function createAtag(item) {
    let tag = document.createElement('a');
    tag.setAttribute('href', item.url);
    tag.setAttribute('class', 'slide');


    return tag;
}


function createH2tag(item) {
    let tagtitle = document.createElement('h2');
    tagtitle.setAttribute('class', 'title');
    tagtitle.append(item.title);


    return tagtitle;
}
function createH4tag(item) {
    let tagtitle2 = document.createElement('h4');
    tagtitle2.setAttribute('class', 'title2');
    tagtitle2.append(item.title2);


    return tagtitle2;
}

function createImgtag(item) {
    let tagImage = document.createElement('img');
    tagImage.setAttribute('src',  item.imageUrl);
    tagImage.setAttribute('alt', item.title);


    return tagImage;
}


function createDots(item) {
    let dots = document.createElement('div');
    dots.setAttribute('class', 'dots');


    data.forEach( (element) => {
        let dotElement = document.createElement('div');
        dotElement.setAttribute('class', 'dot');
        dotElement.setAttribute('data-id', element.id - 1);


        dotElement.onclick = function(event) {
            let id = event.target.getAttribute('data-id');
            sliderIndex = id;
            setSlide();
        }


        dots.appendChild(dotElement);
    });
    console.log(dots);


    return dots;
}


function CurrentDotActive() {
    dotsList[sliderIndex].classList.add('active');
}


function setSlide() {
    sliderContent.innerHTML = ' ';
    let slideItem = createAtag(data[sliderIndex]);
    let h2Tag = createH2tag(data[sliderIndex]);
    let imgTag = createImgtag(data[sliderIndex]);
    let dots = createDots();
    let h4Tag = createH4tag(data[sliderIndex]);

    slideItem.appendChild(imgTag);
    slideItem.appendChild(h2Tag);
    slideItem.appendChild(h4Tag)


    sliderContent.appendChild(slideItem);
    sliderContent.appendChild(dots);


    CurrentDotActive();


    console.log(slideItem);
}


function arrowleftClick() {
    if (sliderIndex <= 0) {
        sliderIndex = data.length - 1;
        setSlide();
        return;
    }


    sliderIndex--;
    setSlide();
}


function arrowRightClick() {
    if (sliderIndex >= data.length - 1) {
        sliderIndex = 0;
        setSlide();
        return;
    }


    sliderIndex++;
    setSlide();
}


arrowLeft.addEventListener('click', arrowleftClick)
arrowRight.addEventListener('click', arrowRightClick);




 setInterval( () => {
    arrowRightClick();
 }, 2000);




setSlide();

