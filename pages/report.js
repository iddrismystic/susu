import Navbar from "../components/Navbar";

const Report = () => {
    return ( 
        <main>
            <div className="Content">
                <Navbar />
                <div className="container">
                    <div className="padding default">
                        <div className="h2 padding">Report</div>
                        <div className="row">
                            <div className="col sm-12 md-4 lg-4 padding">
                                <div className="padding card hover-up pointer navy-left">
                                    <div className="h4">
                                        <div className="row-flex">
                                            <div className="padding">
                                            <i className="lni lni-printer text-indigo"></i>
                                            </div>
                                            <div className="padding">
                                                Print Statement
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col sm-12 md-4 lg-4 padding">
                                <div className="padding card hover-up pointer navy-left">
                                    <div className="h4">
                                        <div className="row-flex">
                                            <div className="padding">
                                            <i className="lni lni-stats-up text-blue"></i>
                                            </div>
                                            <div className="padding">
                                                Yearly Report
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col sm-12 md-4 lg-4 padding">
                                <div className="padding card hover-up pointer navy-left">
                                    <div className="h4">
                                        <div className="row-flex">
                                            <div className="padding">
                                            <i className="lni lni-bullhorn text-pink"></i>
                                            </div>
                                            <div className="padding">
                                                Monthly Report
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col sm-12 md-4 lg-4 padding">
                                <div className="padding card hover-up pointer navy-left">
                                    <div className="h4">
                                        <div className="row-flex">
                                            <div className="padding">
                                            <i className="lni lni-layers text-purple"></i>
                                            </div>
                                            <div className="padding">
                                                Weekly Report
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col sm-12 md-4 lg-4 padding">
                                <div className="padding card hover-up pointer navy-left">
                                    <div className="h4">
                                        <div className="row-flex">
                                            <div className="padding">
                                            <i className="lni lni-bolt text-indigo"></i>
                                            </div>
                                            <div className="padding">
                                                Daily Report
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
     );
}
 
export default Report;