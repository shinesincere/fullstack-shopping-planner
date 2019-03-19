import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {Container, Form, InputGroup, Input, Button, ListGroup, ListGroupItem} from 'reactstrap'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import {connect} from 'react-redux'
import {getItems, postItem, deleteItem} from '../states/itemReducer'

const mapStateToProps = state => ({itemReducer: state.itemReducer})

class ShoppingList extends Component {
  static propTypes = {
    itemReducer: PropTypes.object.isRequired,
    getItems: PropTypes.func.isRequired,
    postItem: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired
  }
  componentDidMount = () => {
    this.props.getItems()
  }
  enterItem = e => {
    this.setState({[e.target.name]: e.target.value})
  }
  postItem = e => {
    e.preventDefault()
    const item = {name: this.state.name}
    this.props.postItem(item)
  }  
  deleteItem = id => {
    this.props.deleteItem(id)
  }
  render() {
    const {items} = this.props.itemReducer
    console.log(items)
    return (
      <Container>
        <Form onSubmit={this.postItem}>
          <InputGroup >
            <Input bsSize='sm' style={s.input} placeholder='Enter an item' 
              name='name' onChange={this.enterItem}/>  
            <Button size='sm' style={s.button} children='Add'/>        
          </InputGroup>
        </Form>
        <ListGroup style={{marginTop: '2rem'}}>
          <TransitionGroup className='shopping-list'>
            {!items ? <h1>Loading</h1>: items.map(({_id, name}) => 
              <CSSTransition key={_id} timeout={500} classNames='fade'>
                <ListGroupItem size='sm' style={s.input}>{name}
                  <Button size='sm' style={s.button} children='X'
                    onClick={this.deleteItem.bind(this, _id)} />
                </ListGroupItem>
              </CSSTransition>
            )}
          </TransitionGroup>
        </ListGroup>
      </Container>
    )
  }
}

export default connect(mapStateToProps, {getItems, postItem, deleteItem})(ShoppingList)

const s = {
  input: {display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 0, paddingLeft: 14, fontWeight: 'bold'},
  button: {borderTopLeftRadius: 0, borderBottomLeftRadius: 0, backgroundColor: '#F51', fontWeight: 'bold'}
}