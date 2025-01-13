import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import store, {changeName, increase} from './store.js'
import { addCount, decreaseCount, deleteItem, sortName } from "../store.jsx";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";




function Cart(){
  let state = useSelector((state) => state);
  //console.log(state.cart[0].name);

  let dispatch = useDispatch();

  const smallProductStyle = {
    border: "1px solid #ddd",
    width: "100px",
    height: "80px",
    cursor: "pointer",
  };

  let textverticalAlign ={
    verticalAlign: "middle",
    textAlign: "center",
  };


  state.cart.forEach(console.log);
  return(
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12" style={{textAlign: "center"}}>
            <h5 style={{ padding: "50px"}}>
              {state.user.name} {state.user.age}의 장바구니
            </h5>
            <Table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>상품이미지</th>
                  <th>상품명</th>
                  <th>수량</th>
                  <th>변경하기</th>
                </tr>
              </thead>
              <tbody>
                {state.cart.map((a, i)=> (
                  <tr key={i}>
                    <td style={textverticalAlign}>{a.id+1}</td>

                    <td>
                      <Link to={`/detail/${a.id}`}>
                        <img
                          src={`img/${a.imgUrl}`}
                          style={smallProductStyle}
                          />
                      </Link>
                    </td>
                    <td style={textverticalAlign}>{a.name}</td>
                    <td style={textverticalAlign}>{a.count}</td>
                    <td style={textverticalAlign}>
                      <Button
                      onClick={() => {
                        dispatch(addCount(a.id));
                      }}
                      variant="outline-success"
                      style={{ marginRight: "10px"}}
                      >
                        +
                      </Button>

                      <Button
                        onClick={() => {
                          dispatch(decreaseCount(a.id));
                        }}
                        variant = "outline-warning"
                        style={{ marginRight: "10px"}}
                        >-</Button>

                        <Button
                        onClick={()=> {
                          dispatch(deleteItem(a.id));
                        }}
                        variant = "outline-danger"
                        >
                          상품삭제
                          </Button>
                        </td> 
                  </tr>
                ))}
              </tbody>
            </Table>
            <Button
            variant="outline-primary"
            onClick={()=>{
              dispatch(sortName(state.cart.Name));
            }}
            >
              이름순정렬
            </Button>{" "}
          </div>
        </div>
      </div>
    </>
  );

}
export default Cart;
