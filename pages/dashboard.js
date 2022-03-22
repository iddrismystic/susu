import Navbar from "../components/Navbar";
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
    const data = [
        {
          name: 'Yearly Reports',
          uv: 4000,
        },
        {
          name: 'Monthly Reports',
          uv: 3000,

        },
        {
          name: 'Weekly Reports',
          uv: 2000,
        },
        {
          name: 'Daily Reports',
          uv: 2780,
        }
      ];
      
    return ( 
        <div className="">
            <div className="Content padding-bottom-100">
                <Navbar />

                <div className="container">
                    <div className="">
                    <div className="card padding">
                        <div className="row-flex">
                            <div><i className="lni lni-layout h1 padding-right-10"></i></div>
                            <div className="h2">
                                Dashboard
                            </div>
                        </div>
                    </div>
                        <div className="row padding-top-50">
                            <div className="col sm-12 md-4 lg-4 padding">
                                <div className="padding card hover-up pointer navy-left">
                                    <div className="h4">
                                        <div className="row-flex hr">
                                            <div className="padding">
                                            <i className="lni lni-stats-up text-blue"></i>
                                            </div>
                                            <div className="padding">
                                                Yearly Report
                                            </div>
                                        </div>
                                        <div className="padding h2 text-center">
                                            230
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col sm-12 md-4 lg-4 padding">
                                <div className="padding card hover-up pointer navy-left">
                                    <div className="h4 hr">
                                        <div className="row-flex">
                                            <div className="padding">
                                            <i className="lni lni-bullhorn text-pink"></i>
                                            </div>
                                            <div className="padding">
                                                Monthly Report
                                            </div>
                                        </div>
                                    </div>
                                    <div className="padding h2 text-center">
                                            400
                                    </div>
                                </div>
                            </div>
                            <div className="col sm-12 md-4 lg-4 padding">
                                <div className="padding card hover-up pointer navy-left">
                                    <div className="h4 hr">
                                        <div className="row-flex">
                                            <div className="padding">
                                            <i className="lni lni-layers text-purple"></i>
                                            </div>
                                            <div className="padding">
                                                Weekly Report
                                            </div>
                                        </div>
                                    </div>
                                    <div className="padding h2 text-center">
                                            300
                                    </div>
                                </div>
                            </div>
                            <div className="col sm-12 md-4 lg-4 padding">
                                <div className="padding card hover-up pointer navy-left">
                                    <div className="h4 hr">
                                        <div className="row-flex">
                                            <div className="padding">
                                            <i className="lni lni-bolt text-indigo"></i>
                                            </div>
                                            <div className="padding">
                                                Daily Report
                                            </div>
                                        </div>
                                    </div>
                                    <div className="padding h2 text-center">
                                            230
                                    </div>
                                </div>
                            </div>
                            <div className="col sm-12 md-12 lg-12 padding-top-40">
                                <div className="card navy-left">
                                <div className="row-flex hr">
                                    <div className="padding">
                                    <i className="lni lni-graph h1 text-navy"></i>
                                    </div>
                                    <div className="padding h2">
                                        Graph
                                    </div>
                                </div>
                                <div className="padding-top-50 container horizontal-scroll">
                                <BarChart
                                width={700}
                                height={300}
                                data={data}
                                margin={{
                                top: 5,
                                right: 90,
                                left: 20,
                                bottom: 5,
                                }}
                                >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="pv" fill="#8884d8" />
                                <Bar dataKey="uv" fill="#82ca9d" />
                                </BarChart>
                              
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Dashboard;