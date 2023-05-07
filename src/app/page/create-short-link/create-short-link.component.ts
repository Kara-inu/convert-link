import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { httpRequestService } from '../../service/httpRequest.service'
import { UtilsService } from '../../service/utils.service'
import { GlobalVariable} from "../../config"

@Component({
  selector: 'app-create-short-link',
  templateUrl: './create-short-link.component.html',
  styleUrls: ['./create-short-link.component.scss']
})
export class CreateShortLinkComponent implements OnInit {
  formLink: FormGroup;
  part = GlobalVariable.BASE_API_INFO
  listFull = []
  listKey = []
  output = ''
  // host = GlobalVariable.HOST_CONFIG 
  host = ''
  partRedirect = GlobalVariable.BASE_REDIREC


  constructor(private formBuilder: FormBuilder,
    private request: httpRequestService,
    private utils: UtilsService,
  ) {
    this.formLink = this.formBuilder.group({
      inputLink: this.formBuilder.control('', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]),
    });
  }
  async ngOnInit(): Promise<void> {
    await this.getData()
    this.host = this.utils.getHost()
  }
  onSend() {
    console.log('input', this.formLink.valid)
    console.log('host', this.utils.getHost())
  }
  get fl() {
    return this.formLink.controls;
  }
  makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  async onCreate() {
    console.log(this.formLink.valid)
    let key = this.makeid(7)
    let createdData = {
      full: this.formLink.value.inputLink,
      short: key
    }
    if (this.listFull.includes(this.formLink.value.inputLink)) {
      this.formLink.controls['inputLink'].setErrors({'duplicate': true});
      return 
    }
    if (this.formLink.valid) {
      if (this.formLink.controls['inputLink'].valid) {
        this.request.postRequest(this.part, createdData).subscribe(res =>{
          this.output = res['short'] ? this.host+this.partRedirect+res['short'] : ''
        })
      }
    }
  }


  async getData() {
    this.request.getRequest(this.part)
      .subscribe(arg => {
        console.log("arg", arg)
        arg.forEach(element => {
          this.listFull.push(element.full)
          this.listKey.push(element.short)
        });
      })
  }
}
