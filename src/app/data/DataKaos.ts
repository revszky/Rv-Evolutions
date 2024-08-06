interface DetailKaos {
  url: string;
  id: string;
  title: string;
  type: string;
  size: string;
  price: string;
  description: string;
  image: string;
}

const urlKaos = "t-shirt"
const DataKaos: DetailKaos[] = [
  {
    url: urlKaos,
    id: "3001",
    title: "t1",
    type: "",
    size: "",
    price: "",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium eligendi animi dicta numquam, saepe laborum a consequatur cumque commodi ex.",
    image: "",
  },

  {
    url: urlKaos,
    id: "3002",
    title: "t2",
    type: "",
    size: "",
    price: "",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium eligendi animi dicta numquam, saepe laborum a consequatur cumque commodi ex.",
    image: "",
  }
]

export default DataKaos;