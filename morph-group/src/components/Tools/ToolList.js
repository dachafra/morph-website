import React from 'react'
import {Row, Col} from 'antd'
import {getAllTools} from '../../requests/virtuoso'
import ToolCard from './ToolCard'
export default class ToolList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            tools:[]
        }
    }

    async componentDidMount(){
        if(Object.keys(this.props).includes('data') && Object.keys(this.props).includes('context')){
            this.setState({tools:this.props.data, context:this.props.context})
        }else{
            let response = await getAllTools().catch((err) =>  console.log(err))
            let limit = await this.props.limit
            let data = await limit !== -1?response.data.slice(0, limit):response.data
            this.setState({tools:data})
        }
    }

    render(){
        return(
            <Row gutter={[16,16]}>
            {
            this.state.tools.map((tool) => {
            return (
                <Col xs={24} md={12} lg={8}>
                    <ToolCard data={tool}/>
                </Col>
            )})
            }
            </Row>
        )
    }
}   