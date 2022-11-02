import { Injectable } from '@angular/core';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

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
    let respuetsa;
    
        
      return getDownloadURL(storageRef);
 
  }
}
