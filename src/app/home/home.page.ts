import { Component } from '@angular/core';
import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';
import { IOSFilePicker } from '@ionic-native/file-picker/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  uri: any = "https://file-examples.com/wp-content/uploads/2017/10/file-example_PDF_1MB.pdf";
  constructor(
    private filePicker: IOSFilePicker,
    private previewAnyFile: PreviewAnyFile,
    private filePath: FilePath,
    private fileChooser: FileChooser
  ) { }

  onClick() {
    this.previewAnyFile.preview(this.uri).then(uri => {
      console.log('preview succ', uri)

    })
      .catch(err => console.log('preview Error', err));;
  }

  select() {
    // this.filePicker.pickFile()
    //   .then(uri => {
    //     console.log('uri', uri)
    //     //this.absLink(uri)
    //     this.uri = uri
    //   })
    //   .catch(err => console.log('Error', err));


    this.fileChooser.open()
      .then(uri => {
        console.log(uri)
        //this.uri = uri
        this.filePath.resolveNativePath(uri)
          .then(filePath => { console.log(filePath); this.uri = filePath })
          .catch(err => console.log(err))

      })
      .catch(e => console.log(e));

  }

}
