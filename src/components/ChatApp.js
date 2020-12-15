import React , { useRef, useState }  from 'react';
import { Button } from 'react-bootstrap';
import './ChatApp.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

// import ChatRoom from './ChatRoom';

import { projectStorage, projectFirestore, timestamp } from '../firebase/config';
const auth = firebase.auth();
const firestore = firebase.firestore();

function ChatApp() {
const [user] = useAuthState(auth);

return (
  <div className="ChatApp">
      <SignOut />

    <section>
      {user ? <ChatRoom /> : <SignIn />}
    </section>

  </div>
);
}

function SignIn() {

const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider);
}

return (
  <>
    <Button variant="info" className="sign-in mt-4" onClick={signInWithGoogle}>Sign in with Google</Button>
    <p>Do not use bad words.</p>
  </>
)

}

function SignOut() {
return auth.currentUser && (
  <Button size="lg" type="reset" block="true" variant="danger" onClick={() => auth.signOut()}>Sign Out</Button>
)
}


function ChatRoom() {
const dummy = useRef();
const messagesRef = firestore.collection('messages');
const query = messagesRef.orderBy('createdAt').limit(25);

const [messages] = useCollectionData(query, { idField: 'id' });

const [formValue, setFormValue] = useState('');


const sendMessage = async (e) => {
  e.preventDefault();

  const { uid, photoURL } = auth.currentUser;

  await messagesRef.add({
    text: formValue,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    uid,
    photoURL
  })

  setFormValue('');
  dummy.current.scrollIntoView({ behavior: 'smooth' });
}

return (<>
  <main>

    {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

    <span ref={dummy}></span>

  </main>

  <form onSubmit={sendMessage}>

    <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Message.." />

    <Button variant="success" type="submit" disabled={!formValue}>🕊️</Button>

  </form>
</>)
}


function ChatMessage(props) {
const { text, uid, photoURL } = props.message;

const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

return (<>
  <div className={`message ${messageClass}`}>
    <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} alt="user" />
    <p>{text}</p>
  </div>
</>)
}

export default ChatApp;

