import React, {useState} from 'react';
import './firebasePhotoApp.css';
import ModalCard from './ModalCard';
import UploadForm from './UploadForm';
import ImageGrid from './ImageGrid';
import { Button, Badge } from 'react-bootstrap';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';


const auth = firebase.auth();

function SignIn() {

    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }
    
    return (
      <>
        <Button variant="info" className="sign-in mt-4" onClick={signInWithGoogle}>Sign in with Google</Button>
        <p>To Upload Images</p>
      </>
    )
    
    }
    
    function SignOut() {
    return auth.currentUser && (
      <Button size="lg" type="reset"  variant="danger" onClick={() => auth.signOut()}>Sign Out</Button>
    )
    }

    
function FirebasePhotoApp(){
    const [user] = useAuthState(auth);
    const [selectedImg, setSelectedImg] = useState(null);
    return(
        <div className="FirebasePhotoApp">
        <div className="title">
        <h2>Your Pictures</h2>
        <Badge variant="warning">Select | Upload | View</Badge>
      </div>
      <div>
      <SignOut />

    <section>
      {user ? <div>
          <UploadForm />
          <ImageGrid setSelectedImg={setSelectedImg} />
          { selectedImg && (<ModalCard selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> )
          } </div> : <SignIn />}
    </section>

  </div>
      
      </div>
    );
}

export default FirebasePhotoApp;