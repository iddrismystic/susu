import Navbar from "../../components/Navbar";

const Monthly = () => {
    return ( 
        <div>
            <div className="Content">
                <Navbar />
                <div className="container">
                <div className="row-flex card">
                <div className="padding">
                <i className="lni lni-bullhorn text-navy h1"></i>
                </div>
                <div className="padding h2">
                Monthly Reports
                </div>
                </div>
                <div className="horizontal-scroll default padding ">
<table className="table stripped">
<thead>
    <th>Username</th>
    <th>Sex</th>
    <th>Age</th>
    <th>Business</th>
    <th>Rate</th>
    <th>Start Date</th>
</thead>
<tbody>
<tr>
<td>Iddris abdul wahab</td>
<td>Male</td>
<td>32</td>
<td>Trader</td>
<td>3</td>
<td>22/37/2022</td>


</tr>
    <tr>
    <td>Iddris abdul Razak</td>
    <td>Male</td>
    <td>32</td>
    <td>Trader</td>
    <td>3</td>
    <td>22/37/2022</td>
 


    </tr>
    <tr>
    <td>Abdulai Karim</td>
    <td>Male</td>
    <td>32</td>
    <td>Trader</td>
    <td>3</td>
    <td>22/37/2022</td>
   

    </tr>

</tbody>
</table>
</div>


                </div>
            </div>
        </div>
     );
}
 
export default Monthly;