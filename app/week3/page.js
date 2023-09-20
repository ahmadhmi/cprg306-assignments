import Item from "./item";
import ItemList from "./item-list";

export default function Page() {
    return (
        <main>
            <h1 className="font-extrabold text-3xl m-5">Shopping List</h1>
            <ItemList/>
        </main>
    );
}