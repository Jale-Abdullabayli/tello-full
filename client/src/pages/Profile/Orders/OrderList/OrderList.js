import React, { useEffect } from 'react';
import './OrderList.scss';
import { useDispatch, useSelector } from 'react-redux';
// import { getTopSellingsAsync } from '../../../../redux/actions/product';
import OrderInfo from '../OrderInfo/OrderInfo';
// import MoonLoader from "react-spinners/MoonLoader";


function OrderList() {

    const dispatch = useDispatch();
    // const topSellings = useSelector(state => state.topSellings);

const topSellings={};
    useEffect(() => {
        // dispatch(getTopSellingsAsync());
        window.scrollTo(0, 0)
    }, []);
    return (
      <>
        {
            topSellings.loading ?
                <div className="spinner">
                    {/* <MoonLoader color={'#2DD06E'} loading={topSellings.loading} size={100} /> */}
                </div> :
                <div className='orderList'>
                    <h4>Sifarişlərim (4 məhsul)</h4>
                    <div className="row">
                        {
                            topSellings?.products?.map(product => <OrderInfo product={product} key={product.id} />)
                        }
                    </div>
                </div>
        }</>

    )
}

export default OrderList