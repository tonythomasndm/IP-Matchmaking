import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const comp = () => {
    useEffect(() => {
      // Replace 'your_collection' and 'your_document_id' with your actual collection and document ID
      const collection = 'Superadmin';
      const documentId = 'EMYzdVO4smDjz0bkZcCP';
  
      const documentRef = firestore().collection(collection).doc(documentId);
  
      // Fetch the document
      documentRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            // Print the data
            console.warn(doc.data());
          } else {
            console.warn('No such document!');
          }
        })
        .catch((error) => {
          console.warn('Error getting document:', error);
        });
    }, []);
  
    return (
      <View>
        {/* Your component UI */}
      </View>
    );
  };
  
  export default comp;
  
  