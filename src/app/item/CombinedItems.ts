import hoodie from "./hoodie.json";
import jacket from "./jacket.json";
import tshirt from "./tshirt.json";
import pants from "./pants.json";

const allItems = [...hoodie, ...jacket, ...tshirt, ...pants];

const parseDate = (dateString: string) => {
    const [day, month, year] = dateString.split("-");
    return new Date(`${year}-${month}-${day}`);
};

const CombinedItems = allItems.sort((a, b) => parseDate(b.release).getTime() - parseDate(a.release).getTime());

export default CombinedItems;

// note
// gambar produk/item harus ukuran 500x500