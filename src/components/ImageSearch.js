import React, { useState } from 'react';
import { Button, Form, Col } from 'react-bootstrap';


const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState('');
  const mystyle = {
    textAlign:"center",
    padding: "10px",
    marginTop:"5px",
    display:"inline",
    fontFamily: "Arial"
  };
  const onSubmit = (e) => {
    // const form = e.currentTarget;
    // if (form.checkValidity() === false) {
    //   console.log('Form not valid')
    //   e.preventDefault();
    //   e.stopPropagation();
    // }
    // else{
    //   console.log('Form valid')
    // setValidated(true);
    e.preventDefault();
    searchText(text);
    // }
  }

  return (
    <div>
<Form inline onSubmit={onSubmit}  style={mystyle}>
  <Form.Row>
    <Col>
    <Form.Control
    // required
    size="lg"
    className="mr-sm-3"
    onChange={e => setText(e.target.value)} 
    type="text" 
    placeholder="Search Image Term"
  />
    <Button variant="success" type="submit">
    Search
  </Button>
    </Col>
  </Form.Row>
</Form>

</div>
  )
}

export default ImageSearch;
