import React, {useState} from 'react';
import { Card, Badge,Button , ListGroup, Modal, Image } from 'react-bootstrap';

var FileSaver = require('file-saver');

const ImageCard = ({ image }) => {
  const tags = image.tags.split(',');
  // const [img, setImage] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => 
  {
    setShow(false);
  }
  const handleShow = () => {
    // setImage(image);
    // console.log(image);
    setShow(true)
    // FileSaver.saveAs(image.largeImageURL, "image.jpg");
  }
  // const downloadImage = ()=>{
  //   FileSaver.saveAs(image.largeImageURL, "image.jpg");
  // }

  return (
    
<div>
<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        animation={false}
        keyboard={false}
        size="xl"
        scrollable="true"
      >
        
        <Modal.Header closeButton>
          <Modal.Title>Photo by {image.user}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Image
         src={image.largeImageURL} alt="img" fluid rounded="true" />
        </Modal.Body>
        <Modal.Footer>
        <Button variant="danger" className="float-right"  onClick={()=>{FileSaver.saveAs(image.largeImageURL, image.user+".jpg");}} >
          {/* <Badge variant="danger">Download Image</Badge> */}
          Download Image
        </Button>
        <strong>Comments: </strong>
        <Badge variant="danger">{image.comments}</Badge>
        </Modal.Footer>
      </Modal>

  <Card border="light" bg="light" className="p-1 m-2"  style={{ width: '22rem'}}>
  <Card.Header style={{color:"purple"}} ><strong>
    {/* <a href={image.largeImageURL} target="_blank" title="Click to open in new tab" download={image.user}> */}
    Photo by {image.user}
    {/* </a> */}
    </strong></Card.Header>
    <Card.Img
    style={{height:"20rem"}}
    title="Click to enlarge"
     onClick={handleShow}
    src={image.webformatURL} alt="img" 
     variant="top" />
    <Card.Body as="div"  className="text-muted">
      <Card.Title>
      
      </Card.Title>
      <Card.Text as="div">
      {tags.map((tag, index) => (
        <ListGroup key={index}  
        variant="flush">
        <ListGroup.Item 
        style={{backgroundColor:"lightgray", color:"black", maxWidth:"fit-content", margin:"2px", borderRadius:"20px", padding:"10px"}}  
        ><strong>#{tag}</strong></ListGroup.Item>
      </ListGroup>
     ))}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <ul style={{listStyleType: "none",textAlign: "start"}}>
          <li>
            <strong>Views: </strong>
            <Badge variant="dark">{image.views}</Badge>
            </li>
          <li>
            <strong>Downloads: </strong>
            <Badge variant="info">{image.downloads}</Badge>
          </li>
          <li>
            <strong>Likes: </strong>
            <Badge variant="success">{image.likes}</Badge>
          </li>
        </ul>
    </Card.Footer>
  </Card>
</div>
  )
}

export default ImageCard;
