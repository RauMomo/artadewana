import { initializeFirestore } from 'firebase/firestore';
import { useMemo } from 'react';
import { useFirebaseApp } from 'reactfire';

export default function FirestoreProvider() {
  const firestore = useFirestore();
}

function useFirestore() {
  const app = useFirebaseApp();
  return useMemo(() => initializeFirestore(app, {}), [app]);
}

