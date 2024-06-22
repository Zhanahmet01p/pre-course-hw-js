// code
const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"]


function createColorString() {
    return colors.filter(ger).join('-')
}
function ger(item){
    if (item=="черный" || item=="красный" ||item=="желтый"){
        return item;
    }
}

console.log(createColorString());