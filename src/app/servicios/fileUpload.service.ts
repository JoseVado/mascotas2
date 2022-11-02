import { Injectable } from '@angular/core';
import { getDownloadURL, getStorage, ref, uploadBytes, deleteObject  } from 'firebase/storage';

@Injectable()
export class FileUploadService {
  basePath = 'uploads/';

  constructor() {}

  pushFileToStorage(file: File): void {
    const storage = getStorage();
    const storageRef = ref(storage, `${this.basePath}${file.name}`);
    uploadBytes(storageRef, file);
  }

  getFileOfStorage(name: string): Promise<string> {
    const storage = getStorage();
    const storageRef = ref(storage, `${name}`);

    return getDownloadURL(storageRef);
  }


  deleteOfStorage(name: string): void {
    
    const storage = getStorage();
    const storageRef = ref(storage, `${name}`);
    
    deleteObject(storageRef).then().catch(error => console.log(error));
  }
}
