let arr = [
    {
        brand: "Samsung",
        model: "SamsungA30",
        price: "40000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb",

    },
    {
        brand: "Samsung",
        model: "SamsungA10",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom: "128gb",

    },
    {
        brand: "Samsung",
        model: "SamsungA20",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom: "128gb",

    },
    {
        brand: "Vivo",
        model: "VivoY20",
        price: "20000",
        camera: "40px",
        ram: "2gb",
        rom: "32gb",

    },
    {
        brand: "Vivo",
        model: "VivoY11",
        price: "20000",
        camera: "40px",
        ram: "3gb",
        rom: "32gb",

    },
    {
        brand: "Vivo",
        model: "VivoY15",
        price: "30000",
        camera: "40px",
        ram: "4gb",
        rom: "64gb",

    },
    {
        brand: "Motorola",
        model: "Motorola123",
        price: "5000",
        camera: "2px",
        ram: "2gb",
        rom: "32gb",

    },
    {
        brand: "Iphone",
        model: "Iphone12",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb",

    },
    {
        brand: "Iphone",
        model: "Iphone13",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb",

    },
    {
        brand: "Iphone",
        model: "IphoneX",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb",

    },
]

const name = document.getElementById('BrandInput');
const options = document.getElementById('option');
let render = document.getElementById("renderdata");
var data = [];
const arrrdata = []
const TableRender = () => {
    arrrdata.map((e) => {
        render.innerHTML = ''
        e.map((value) => {
            render.innerHTML += `<h1>${value.brand}</h1><p>${value.model}</p> <p>${value.price}</p><p>${value.camera}</p><p>${value.rom}</p><p>${value.ram}</p>`
        })
    })
}
const onchangeText = (event) => {
    console.log(event.value);
    console.log('data', data)
    const filterRenderData = data.filter((phone) => {
        const abc = phone.filter((e, i) => {
            if (
                e.model.toLowerCase().includes(event.value.toLowerCase())
            ) {
                return e;
            }
        })
        arrrdata.push()
        arrrdata.push(abc)
    })
    console.log('filterRenderData', filterRenderData)
    // console.log('maindata', arrrdata)
    TableRender()
}
const RenderOPtion = () => {
    console.log("map", data)
    data.map((e, i) => {
        options.innerHTML = ''
        e.map((value, i) => {
            return (
                options.innerHTML += `<option value="${value.model}">${value.model}</option>`

            )
        })
    })
}
function FilderData(valuedata) {
    // const erraray = [];
    const dataFilterRender = arr.filter((e, i) => {
        if (
            e.brand.toLowerCase().includes(valuedata.value.toLowerCase())
        ) {
            return e;
        }
    })
    console.log(dataFilterRender)
    data.push()
    data.push(dataFilterRender)
    RenderOPtion()
}
