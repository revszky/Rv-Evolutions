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


const DataKaos: DetailKaos[] = [
  {
    url: "t-shirt",
    id: "3001",
    title: "ASDF",
    type: "T-shirt",
    size: "L",
    price: "",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium eligendi animi dicta numquam, saepe laborum a consequatur cumque commodi ex.",
    image: "https://fastly.picsum.photos/id/1044/500/500.jpg?hmac=Uz_GCA4ZqpXNg9t-4DnKMcS2iTz66EH9EUqjqflAtgU",
  },

  {
    url: "t-shirt",
    id: "3002",
    title: "ASDG",
    type: "T-shirt",
    size: "XXL",
    price: "",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium eligendi animi dicta numquam, saepe laborum a consequatur cumque commodi ex.",
    image: "https://fastly.picsum.photos/id/1044/500/500.jpg?hmac=Uz_GCA4ZqpXNg9t-4DnKMcS2iTz66EH9EUqjqflAtgU",
  },
]

export default DataKaos;