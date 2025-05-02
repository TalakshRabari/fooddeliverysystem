 import { useRef } from "react"
import "./invoice.css"
import {useLocation} from "react-router"

import { useReactToPrint} from "react-to-print"
function Invoice(){

let location = useLocation()

let contentRef = useRef(null);
let reactToPrintFn = useReactToPrint({contentRef});

    return(
       <> 
       <section className="wrapper-invoice"  ref={contentRef}>
  {/* switch mode rtl by adding class rtl on invoice class */}
  <div className="invoice">
    <div className="invoice-information">
      <p><b>Invoice #</b> : 12345</p>
      <p><b>Created Date </b>: {new Date().toLocaleDateString("en-GB")}</p>
      <p><b>Due Date</b> : May, 09 2022</p>
    </div>
    {/* logo brand invoice */}
    <div className="invoice-logo-brand">
      {/* <h2>Tampsh.</h2> */}
      <img src="/savory/assets/media/logo.png" alt />
    </div>
    {/* invoice head */}
    <div className="invoice-head">
      <div className="head client-info">
        <p>Savory Bites</p>
        <p>3rd Floor , Ram Complex</p>
        <p>Near Home Science , Mota Bazar</p>
        <p>V.V.Nagar, Anand 388 120</p>
      </div>
      <div className="head client-data">
        <p>-</p>

        <p>{fnm} {lnm}</p>
        <p>{address}</p>
        <p>{city} - {zip}</p>
      </div>
    </div>
    {/* invoice body*/}
    <div className="invoice-body">
      <table className="table">
        <thead>
          <tr>
            <th>Item Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {DataTransferItemList.map((item)=>(
          <tr>
            <td>Template Invoice</td>
            <td>₹.75.000</td>
          </tr>
          ))}
        </tbody>
      </table>
      <div className="flex-table">
        <div className="flex-column" />
        <div className="flex-column">
          <table className="table-subtotal">
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td>₹.80.000</td>
              </tr>
              <tr>
                <td>PPN 10%</td>
                <td>₹.5.000</td>
              </tr>
              {/* <tr>
                <td>Credit</td>
                <td>₹.0</td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
      {/* invoice total  */}
      <div className="invoice-total-amount">
        <p>Total : ₹{totalPrice}</p>
      </div>
    </div>
    {/* invoice footer */}
    <div className="invoice-footer">
      <p>Thank you, Happy Shopping Again</p>
    </div>
  </div>
</section>

 <div classname="copyright">
  <button>Download Invoice</button>
</div>

</>
    )     
        
    }


export default Invoice