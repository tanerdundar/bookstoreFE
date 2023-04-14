import Header from "./Header";
import Row from "./Row";
import { useEffect } from "react";

function List(props) {
  const handleList = () => {};
  return (
    <div className="list">
      <Header />
      <>
        {props.array.map((e, index = 0) => {
          index++;
          return (
            <Row
              arr={e}
              key={index}
              i={index}
              title={e.title}
              author={e.author}
              description={e.description}
              onDelete={props.delete}
              onUpdate={props.update}
            />
          );
        })}
      </>
    </div>
  );
}

export default List;
