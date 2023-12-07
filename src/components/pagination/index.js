import {generatePagination} from "../../utils";
import { useState} from "react";
import useStore from "../../store/use-store";
import './styles.css';

function Pagination (select) {
  const store = useStore();
  const numberPages = Math.ceil(select.count / 10);
  const [pageNumber, setPageNumber] = useState(1)
  const numberPagination = generatePagination(pageNumber, numberPages);

  const onclickButton = (value) => {
    const conversion = +value
    if(conversion === pageNumber){
      return
    }
    setPageNumber(conversion);
    store.actions.catalog.load((conversion - 1)  * 10);
  }

 return (
   <div className="paginationBlock">
     {numberPagination.map((value, index)=>{
       const className = 'paginationButton' + (pageNumber.toString() === value ? ' activePaginationButton' : '');
       if (value === '...'){
         return <span key={`${index}/ellipsis`}>{value}</span>
       }
       return (
         <button onClick={()=>{onclickButton(value)}} key={value} className={className}>{value}</button>
       );
     })}
   </div>
 )
}

export default Pagination