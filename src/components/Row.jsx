import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faS, faTrash, faPen } from "@fortawesome/free-solid-svg-icons";

library.add(faS, faPen, faTrash);

function Row(props) {
  const handleDelete = () => {
    props.onDelete(props.arr.bookId);
  };
  const handleUpdate = () => {
    props.onUpdate(props.arr.bookId);
  };
  return (
    <div className="row">
      <div className="index">{props.i}</div>
      <div className="row" title={props.description}>
        <div className="book-name">{props.title}</div>
        <div className="author">{props.author}</div>
      </div>
      <div className="icon">
        <div onClick={handleDelete} className="trash">
          <FontAwesomeIcon icon={["faS", "trash"]} />
        </div>
        <div onClick={handleUpdate} className="pen">
          <FontAwesomeIcon icon={["faS", "pen"]} />
        </div>
      </div>
    </div>
  );
}

export default Row;

// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
