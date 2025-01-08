import { addItem } from '../store.jsx'
import { useDispatch } from 'react-redux'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import { Nav, TabContent } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect } from "react";



function Detail(props){
    let{id} = useParams();
    let [tap, setTap] = useState(0);
    let selproduct = props.shoes.find((x) => x.id == id); 
    let dispatch = useDispatch();
    return (
        <div className="container">
            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link onClick={()=>{ setTap(0) }} eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{ setTap(1) }} eventKey="link0">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{ setTap(2) }} eventKey="link0">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tap={tap}/>
            <div className="row">
                <div className="col-md-6">
                    <img src={'/'+selproduct.imgUrl} width="80%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{selproduct.title}</h4>
                    <p>{selproduct.content}</p>
                    <p>{selproduct.price}</p>
                    <Button
                      variant="primary"
                      onClick={() => {
                        dispatch(
                            addItem({
                                id:selproduct.id,
                                imgUrl: selproduct.imgUrl.replace("img/", ""),
                                name: selproduct.title,
                                count: 1,
                            })
                        );
                      }}
                      style={{ marginRight: "10px"}}
                      >주문하기</Button>

                      <Link to="/cart">
                        <Button variant="outline-success">주문상품 확인하기</Button>
                      </Link>
                </div>
            </div>
        </div>
    )


    function TabContent({tap}){
        let [fade, setFade] = useState('')
         useEffect( ()=>{
          setTimeout(()=>{ setFade('end')},10)
          return ()=>{
              setFade('')
          }
         } ,[tap])
        let [fade2, setFade2] = useState("")
         useEffect(()=>{
            setFade2('end')
            return ()=>{
                setFade2("")
            }
         },[])
         return (
            <div className={'container start ' + fade2}>
              { [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tap] }
            </div>
          )
        }
    }
export default Detail;