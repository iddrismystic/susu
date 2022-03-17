import Navbar from "./Navbar";

const Layout = ({children}) => {
    return ( 
        <div>
            <Navbar />
            <div className="padding-top-80">
            {children}
            </div>
        </div>
     );
}
 
export default Layout;