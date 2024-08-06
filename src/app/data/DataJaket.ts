interface DetailJaket {
  url: string;
  id: string;
  title: string;
  type: string;
  size: string;
  price: string;
  description: string;
  image: string;
}

const urlJaket = "jaket"
const DataJaket: DetailJaket[] = [
  {
    url: urlJaket,
    id: "2001",
    title: "j1",
    type: "",
    size: "",
    price: "",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium eligendi animi dicta numquam, saepe laborum a consequatur cumque commodi ex.",
    image: "",
  },

  {
    url: urlJaket,
    id: "2002",
    title: "j2",
    type: "",
    size: "",
    price: "",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium eligendi animi dicta numquam, saepe laborum a consequatur cumque commodi ex.",
    image: "",
  }
]

export default DataJaket;