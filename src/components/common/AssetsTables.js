import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

const AssetsTable = (assets) => (

    <Card small className="mb-4 overflow-hidden">
            <CardHeader className="bg-light">
              <h6 className="m-0 text-black">Assets</h6>
            </CardHeader>
            <CardBody className="bg-light p-0 pb-3">
              <table className="table mb-0">
                <thead className="thead">
                  <tr>
                    <th scope="col" className="border-0">
                      #
                    </th>
                    <th scope="col" className="border-0">
                      Name
                    </th>
                    <th scope="col" className="border-0">
                      Category
                    </th>
                    <th scope="col" className="border-0">
                      Sentiment
                    </th>
                    {/* <th scope="col" className="border-0">
                      24h %
                    </th>
                    <th scope="col" className="border-0">
                      Market Cap
                    </th>
                    <th scope="col" className="border-0">
                      Volume(24h)
                    </th> */}
                  </tr>
                </thead>
                <tbody>
                
                  {assets.assets.map(( listValue, index ) => {
                    return (
                      <tr key={index}>
                        {console.log(listValue)}
                        <td>{index+1}</td>
                        <td>{listValue.name}</td>
                        <td>{listValue.category}</td>
                        <td>{listValue.sentiment}</td>
                        {/* <td></td>
                        <td></td>
                        <td></td> */}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </CardBody>
          </Card>
)

export default AssetsTable;