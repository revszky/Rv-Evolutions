interface DetailSweater {
  url: string;
  id: string;
  title: string;
  type: string;
  size: string;
  price: string;
  description: string;
  image: string;
}

const urlSweater = "sweater"
const DataSweater: DetailSweater[] = [
  {
    url: urlSweater,
    id: "4001",
    title: "s1",
    type: "",
    size: "",
    price: "",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium eligendi animi dicta numquam, saepe laborum a consequatur cumque commodi ex.",
    image: "",
  },

  {
    url: urlSweater,
    id: "4002",
    title: "s2",
    type: "",
    size: "",
    price: "",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium eligendi animi dicta numquam, saepe laborum a consequatur cumque commodi ex.",
    image: "",
    
  }
]

export default DataSweater;