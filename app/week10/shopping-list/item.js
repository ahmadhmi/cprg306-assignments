export default function Item({ item, handleClick}) {
    let text = `Buy ${item.quantity} in ${item.category}`;
  
    return (
      <ul className="p-2 m-2 hover:my-4 hover:text-center hover:ease-auto hover:duration-500 text-stone-50 bg-violet-950 max-w-md" onClick={() => handleClick(item.name)}>
        <li className="cursor-pointer text-xl font-bold">{item.name}</li>
        <li className="cursor-pointer">{text}</li>
      </ul>
    );
  }
  