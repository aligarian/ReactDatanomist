import React, {Component} from 'react'
import { Button, Container, Divider, Grid, Header, Image, Menu, Segment, Item, Form, Dropdown, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import Actions from './actions/action';
import './App.css'; 

class App extends Component{
  constructor(props){
    super(props)
  }
  componentWillMount() {
    this.props.dispatch(Actions.fetchCategories());
  }
  setItems(){
    this.props.dispatch(Actions.fetchItemsByCategoryId());
  }
  getDefaultItems(){
    let items=[];
    if(this.props.categories[0] !== undefined){
      items = this.props.categories[0].child_categories.map((e)=>{
        return e;
      });
    }
    return items;
  }
  
  render(){
     
    return (
      <Container style={{ marginTop: '3em' }}>
        <Header as='h1'>Example</Header>
        <Menu>
          {this.props.categories.map((e) => {
            return <Dropdown text={e.category_title} pointing className='link item' key={e.id} //active={activeItem === 'editorials'} //onClick={this.handleItemClick}
            >
              <Dropdown.Menu>
                {e.child_categories.map((e)=>{
                return <Dropdown.Item key={e.id} onClick={()=>this.setItems(e.id)}>{e.category_title} </Dropdown.Item>
              })}
              </Dropdown.Menu>
            </Dropdown>
          })}
          
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
         <br/>
         {this.getDefaultItems().map((e) => {
          return <Grid columns={3} >
            <Header as='h2'>{e.category_title}</Header>
            <Grid.Row>
              {e.elements.map((c) => {
                return <Grid.Column >
                  <Item.Group>
                    <Item>
                      <Item.Image size='tiny' src='https://dummyimage.com/300' />

                      <Item.Content>
                        <Item.Header as='a'>{c.title}</Item.Header>
                        <Item.Meta>{e.title}</Item.Meta>
                        <Item.Description className="wrap-text">
                          {c.description}
                        </Item.Description>
                        <Item.Extra> Details</Item.Extra>
                      </Item.Content>
                    </Item>
                  </Item.Group>
                </Grid.Column>
              })}
            </Grid.Row>
          </Grid>
        })}
      </Container>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    categories: state
  }
}

//const mapDispatchToProps = { increment, decrement, reset }

export default connect(
  mapStateToProps
)(App)

