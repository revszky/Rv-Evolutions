interface DetailHoodie {
  url: string;
  id: string;
  title: string;
  type: string;
  size: string;
  price: string;
  description: string;
  image: string;
}

const urlHoodie = "hoodie"

const DataHoodie: DetailHoodie[] = [
  {
    url: urlHoodie,
    id: "1001",
    title: "h1",
    type: "",
    size: "",
    price: "",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium eligendi animi dicta numquam, saepe laborum a consequatur cumque commodi ex.",
    image: "",
  },

  {
    url: urlHoodie,
    id: "1002",
    title: "h2",
    type: "",
    size: "",
    price: "",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium eligendi animi dicta numquam, saepe laborum a consequatur cumque commodi ex.",
    image: "",
  }
]

export default DataHoodie;