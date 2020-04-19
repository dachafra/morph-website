import React from 'react'
import Layout from '../components/Layout'
import { Row, Col, Typography, Divider } from 'antd'
import vkg from '../assets/vkg.svg'
import CardList from '../components/CardList'
import MorphGraph from '../components/MorphGraph'
const {Title} = Typography
const {Paragraph} = Typography
const property = "LA PROPIEDAD"
export default class Home extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Layout>
                <Row align="bottom">
                    <Col xs={24} md={12}>
                        <Title level={3}>Morph Family</Title>
                        <Paragraph>
                            Morph is a suite of open source tools for generating Virtual Knowledge Graphs over heterogeneous data sources                            
                        </Paragraph>
                    </Col>
                    <Col  xs={24} md={12}>
                        <img src={vkg} alt="" className="img-fluid"/>
                    </Col>
                </Row>
                <Divider></Divider>
                <Row>
                    <Col>
                        <Title level={2}>Recent Publications:</Title>
                    </Col>
                </Row>
                <CardList></CardList>
                <Divider></Divider>
            </Layout>
        )
    }
}